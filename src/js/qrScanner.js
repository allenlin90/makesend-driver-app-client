const state = {
    rearCameras: [],
    cameras: [],
    appleDevice: null,
    scanning: false,
    video: null
}

export function stopStream() {
    if (state.scanning) {
        state.video.srcObject.getTracks().forEach(track => {
            track.stop();
        });
        state.scanning = false;
        state.video = null;
    }
}

export async function qrScanner() {
    const container = document.querySelector(".container");
    container.style.justifyContent = `space-between`;
    container.innerHTML = `
        <div id="qrcode_scanner">
            <div>
                <h1>QR Code Scanner</h1>
            </div>
            <div id="videoSelect">
                <label for="videoSource">Change Camera</label>
                <select id="videoSource" class="custom-select"></select>
            </div>
            <canvas id="qr-canvas"></canvas>
            <div id="qr-result">
                <b>Result:</b><span id="outputData"></span>
            </div>
            <div id="startScanBtn">
                <label>
                    <img src="https://uploads.sitepoint.com/wp-content/uploads/2017/07/1499401426qr_icon.svg">
                    <p>Scan Again</p>
                </label>
            </div>
        </div>
    `;

    const video = document.createElement("video");
    state.video = video;
    const canvasElement = document.querySelector("#qr-canvas");
    canvasElement.width = (canvasElement.offsetHeight / 3) * 4;
    const canvas = canvasElement.getContext("2d");

    const qrResult = document.querySelector("#qr-result");
    const outputData = document.querySelector("#outputData");
    const videoSelect = document.querySelector('#videoSource');

    const startScanBtn = document.querySelector('#startScanBtn');

    videoSelect.onchange = start;
    await checkDevices();
    start();

    qrcode.callback = readResult;

    startScanBtn.onclick = start;

    function readResult(res) {
        if (res) {
            qrResult.style.display = `block`;
            outputData.innerText = res;
            startScanBtn.style.display = `block`;
            state.scanning = false;

            state.video.srcObject.getTracks().forEach(track => {
                track.stop();
            });

            canvasElement.hidden = true;
        }
    };

    async function start() {
        qrResult.style.display = `none`;
        startScanBtn.style.display = `none`;
        canvasElement.hidden = false;
        if (/iphone|ipad|mac|apple|os\sx/.test(deviceAgent().toLowerCase())) {
            try {
                if (window.stream) {
                    window.stream.getTracks().forEach(track => {
                        track.stop();
                    });
                }

                const devices = await getDevices();
                const rearCameras = devices.filter(device => device.kind === 'videoinput' && /(back|rear)/g.test(device.label.toLowerCase()));
                let constraints = {}
                const videoSource = videoSelect.value;
                if (rearCameras.length) {
                    constraints = {
                        video: { deviceId: videoSource ? { exact: videoSource } : rearCameras[rearCameras.length - 1].deviceId }
                    };
                } else {
                    constraints = {
                        video: { deviceId: { exact: undefined } }
                    }
                }
                console.log(constraints);
                navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(checkDevices).catch(errorHandler);
            } catch (err) {
                errorHandler(err);
            }

            async function getDevices() {
                return await navigator.mediaDevices.getUserMedia({ video: true })
                    .then(async (res) => {
                        const devices = await navigator.mediaDevices.enumerateDevices();
                        if (devices.length) {
                            const videoInputs = devices.filter(device => device.kind === 'videoinput');
                            const videoSelectedValue = videoSelect.value;
                            videoSelect.innerHTML = '';
                            videoInputs.forEach((videoInput, index) => {
                                const option = document.createElement('option');
                                option.value = videoInput.deviceId;
                                option.text = videoInput.label || `camera ${index + 1}`;
                                videoSelect.appendChild(option);
                            });
                            videoSelect.value = videoSelectedValue;
                            return devices;
                        } else {
                            errorHandler();
                            console.log('trigger')
                        }
                    })
                    .catch(errorHandler);
            }
        } else {
            try {
                if (window.stream) {
                    window.stream.getTracks().forEach(track => {
                        track.stop();
                    });
                }
                const videoSource = videoSelect.value;
                let constraints = null;
                if (state.rearCameras.length) {
                    constraints = {
                        video: { deviceId: videoSource ? { exact: videoSource } : { exact: state.rearCameras[state.rearCameras.length - 1].deviceId } }
                    };
                    navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(checkDevices).catch(errorHandler);
                } else {
                    constraints = {
                        video: { deviceId: undefined }
                    };
                    try {
                        constraints = { video: { facingMode: 'environment' } };
                        navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(checkDevices).catch(errorHandler);
                    } catch (err) {
                        console.log('no rear camera');
                        constraints = { video: true };
                        navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(checkDevices).catch(errorHandler);
                    }
                }
                console.log(constraints);

            } catch (err) {
                console.log(err);
            }
        }
    }

    async function checkDevices() {
        const devices = await navigator.mediaDevices.enumerateDevices().then((devices) => devices).catch(err => err);
        const videoInputs = devices.filter(device => device.kind === 'videoinput');
        if (videoInputs.length) {
            const videoSelectedValue = videoSelect.value;
            videoSelect.innerHTML = '';
            videoInputs.forEach((videoInput, index) => {
                const option = document.createElement('option');
                option.value = videoInput.deviceId;
                option.text = videoInput.label || `camera ${index + 1}`;
                videoSelect.appendChild(option);
            });
            videoSelect.value = videoSelectedValue;
            const rearCameras = devices.filter(device => /(back|rear)/g.test(device.label.toLowerCase()));
            state.rearCameras = rearCameras;
            return devices;
        } else {
            errorHandler('This device has no available camera');
        }
    }

    function gotStream(stream) {
        window.stream = stream; // make stream available to console
        state.scanning = true;

        state.video.setAttribute("playsinline", true);
        state.video.srcObject = stream;
        state.video.play();
        tick();
        scan();
    }

    function errorHandler(err) {
        let message =
            `<h1>App can't start camera because </h1>
            <p>"${err}"</p>
            <div id="refresh_page" class="btn btn-light" style="margin: 0 auto;">Reload Page</div>`;
        document.querySelector('#qrcode_scanner').innerHTML = message;
        document.querySelector('#refresh_page').addEventListener('click', function (e) {
            e.stopPropagation();
            location.reload();
        });
        console.log(err);
    }

    function tick() {
        canvasElement.height = state.video.videoHeight;
        canvasElement.width = state.video.videoWidth;
        canvas.drawImage(state.video, 0, 0, canvasElement.width, canvasElement.height);

        state.scanning && requestAnimationFrame(tick);
    }

    function scan() {
        try {
            qrcode.decode();
        } catch (e) {
            setTimeout(scan, 300);
        }
    }

    function deviceAgent() {
        let re = /\((.*?)\)/g;
        let userAgent = navigator.userAgent.match(re)[0];
        userAgent = userAgent.slice(1, (userAgent.length - 1));
        return userAgent;
    }
}