import { createSignaturePad } from './signaturePad.js';
import { createImageUploader } from './uploadImage.js';
import endpoints from './endpoints.js';
import { generateHeaders } from './checkToken.js';
const searchParcelByPhoneEndpoint = `${endpoints.searchParcelByPhone}`;
const searchParcelByIdEndpoint = `${endpoints.searchParcelById}`;

export const state = {
    input: '',
    timeoutId: null,
    parcels: [],
    allParcelStatus: null
}

export function handleSubmitEvent() {
    const form = document.querySelector('form');
    form.onsubmit = function (event) {
        event.preventDefault();
        searchParcel();
    }
}

export function handleInputEvent() {
    const input = document.querySelector('input');
    input.oninput = function (event) {
        state.input = event.target.value;
        document.querySelector('#result_list ul').innerHTML = ``;
        if (state.timeoutId) {
            clearTimeout(state.timeoutId);
        }
        const timeoutId = setTimeout(function () {
            searchParcel();
        }, 300);
        state.timeoutId = timeoutId;
    }
}

function searchParcel() {
    const input = document.querySelector('input');
    if (input.id === 'receiver_phone') {
        searchParcelByPhone(state.input);
    } else if (input.id === 'tracking_id') {
        searchParcelById(state.input);
    }
}

export async function searchParcelByPhone(phone) {
    const validPhone = phone.match(/^0\d{9}/g);
    if (validPhone) {
        try {
            const headers = await generateHeaders();
            const searchResults = await fetch(searchParcelByPhoneEndpoint, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Token': `${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
                    'Client-Token': headers['Client-Token'],
                    'Time-Stamp': headers['Time-Stamp'],
                    'Time-Signature': headers['Time-Signature'],
                    credentials: 'makesend_sorting',
                },
                body: JSON.stringify({
                    receiver_phone: phone
                })
            }).then(res => res.json()).then(data => data);

            state.allParcelStatus = searchResults.reduce((object, parcel) => {
                object[parcel.shipmentID] = {
                    id: parcel.shipmentID,
                    status: parcel.status.toLowerCase()
                };
                return object
            }, {});

            state.parcels = searchResults.map((parcel) => {
                const serviceDate = new Date(Date.parse(parcel.service_date)).toLocaleDateString().split('/');
                parcel.service_date = `${serviceDate[2]}-${serviceDate[0]}-${serviceDate[1]}`;
                return parcel;
            });

            if (state.parcels.length) {
                listResults();
            } else {
                listErrorResult();
            }
        } catch (err) {
            errAlert(err);
        }
    } else {
        const errorMsg = `Phone number starts with 0 and is in 10 digits!`;
        returnErrorList(errorMsg);
    }
}

export async function searchParcelById(id) { // EX2101181126620
    const shipmentId = /^([eE][xX]|[Ss][Tt])\d{13}/g.exec(id);
    if (shipmentId) {
        try {
            const headers = await generateHeaders();
            const searchResults = await fetch(searchParcelByIdEndpoint, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Token': `${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
                    'Client-Token': headers['Client-Token'],
                    'Time-Stamp': headers['Time-Stamp'],
                    'Time-Signature': headers['Time-Signature'],
                    credentials: 'makesend_sorting',
                },
                body: JSON.stringify({
                    trackingId: shipmentId[0]
                })
            }).then(res => res.json()).then(data => data);
            state.parcels = searchResults;
            if (state.parcels.length) {
                listResults();
                return searchResults;
            } else {
                listErrorResult();
            }
        } catch (err) {
            errAlert(err);
        }
    } else {
        const errorMsg = `Your tracking ID is invalid!`;
        returnErrorList(errorMsg);
    }
}

function returnErrorList(message) {
    document.querySelector('#result_list ul').innerHTML = `
    <li id="input_error" class="list-group-item" style="color: red; font-weight: bold;"></li>
    `;
    document.querySelector('#input_error').innerText = message;
}

function listErrorResult() {
    document.querySelector('#result_list ul').innerHTML = `
    <li id="input_error" class="list-group-item" style="color: red; font-weight: bold;"></li>
    `;
    document.querySelector('#input_error').innerText = `No result from "${state.input}"`;
}

function listResults() {
    const parcels = state.parcels.map(parcel => {
        if (/^[eE][xX]\d{13}/g.exec(parcel.shipmentID)) {
            const service_date = new Date(Date.parse(parcel.service_date));
            const item = `
            <li class="list-group-item">
                <div class="card" data-shipment-id="${parcel.shipmentID}">
                    <div class="card-body">
                        <h5 class="card-title">Parcel ID: ${parcel.shipmentID}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Service Date: ${service_date.getDate()}-${service_date.getMonth() + 1}-${service_date.getFullYear()}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Delivery Status: ${parcel.status}</h6>
                        <p class="card-text">Client:${parcel.receiver_name}</p>
                        <p class="card-text">Phone:${parcel.receiver_no}</p>
                        <p class="card-text">Address: ${parcel.dropoff_address}</p>
                        <p class="card-text">${parcel.dropoff_district}, ${parcel.dropoff_province}, ${parcel.dropoff_postcode}</p>
                        <p class="card-text">Note: ${parcel.note}</p>
                        <div>
                            ${showBtns(parcel.status.trim().toLowerCase(), parcel.shipmentID)}
                        </div>
                    </div>
                </div>
            </li>
            `;
            return item;
        } else if (/^[Ss][Tt]\d{13}/g.exec(parcel.shipmentID)) {
            console.log(parcel);
            const created_at = new Date(Date.parse(parcel.created_at));
            const createdAtTime = `${created_at.getDate()}/${created_at.getMonth() + 1}/${created_at.getFullYear()}`;
            const item = `
            <li class="list-group-item">
                <div class="card" data-shipment-id="${parcel.shipmentID}">
                    <div class="card-body">
                        <h5 class="card-title">Parcel ID: ${parcel.shipmentID}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Delivery Status: ${parcel.status}</h6>
                        <p class="card-text">Created at: ${createdAtTime}</p>
                        <div>
                            ${showBtns(parcel.status.trim().toLowerCase(), parcel.shipmentID)}
                        </div>
                    </div>
                </div>
            </li>
            `;
            return item;
        }
    }).join('');
    document.querySelector('#result_list ul').innerHTML = parcels;
    const parcelCards = [...document.querySelector('.list-group.list-group-flush').children];
    parcelCards.forEach((parcelCard) => {
        const card = parcelCard.querySelector('.card');
        const uploadSignatureBtn = parcelCard.querySelector('div[data-type=signature]')
        uploadSignatureBtn.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            createSignaturePad(card.dataset.shipmentId);
        });

        const uploadImageBtn = parcelCard.querySelector('div[data-type=photo]');
        uploadImageBtn.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            createImageUploader(card.dataset.shipmentId);
        });
    });
}

function showBtns(status = '', trackingId = '') {
    if (status && trackingId) {
        let buttons = ``;
        let btnType = ``;
        let btnActive = ``;
        switch (status) {
            case 'pending':
            case 'in hub':
            case 'delivering':
            case 'delivering (delay)':
            case 'returning':
            case 're-deilvering':
                btnType = 'primary';
                break;
            case 'delivered':
            case 'delivered (delay)':
            case 'returned':
                btnType = 'primary';
                btnActive = 'disabled';
                break;
            case 'canceled':
            case 'failed delivery':
            case 'not found':
                btnType = 'danger';
                btnActive = 'disabled';
                break;
            default:
                btnType = 'primary';
        }
        buttons = `
        <div class="card-link btn btn-${btnType} ${btnActive}" data-type="photo">Photo</div>
        <div class="card-link btn btn-${btnType} ${btnActive}" data-type="signature">Singature</div>
        <!-- <div class="card-link btn btn-${btnType} ${btnActive}">
            <a href="#scanner?id=${trackingId}">
                Scan_QR
            </a>
        </div>
        <div class="card-link btn btn-${btnType} ${btnActive} disabled">
            <a class="disabled" href="#registerqr?trackingId=${trackingId}">
                Pair_ID
            </a>
        </div> -->
        `;
        return buttons;
    }
    return null;
}

function errAlert(errMessage) {
    const header = document.querySelector('header');
    const content = header.innerHTML;
    header.innerHTML = `
    <div id="warning" class="alert alert-danger" role="alert">
        Something went wrong: ${errMessage}
    </div>
    `;
    setTimeout(function () {
        header.innerHTML = `${content}`;
    }, 3000);
}

export async function checkDeliveryStatus(id = '') {
    if (id) {
        const headers = await generateHeaders();
        const response = await fetch(searchParcelByIdEndpoint, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'User-Token': `${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
                'Client-Token': headers['Client-Token'],
                'Time-Stamp': headers['Time-Stamp'],
                'Time-Signature': headers['Time-Signature'],
                credentials: 'makesend_sorting',
            },
            body: JSON.stringify({
                trackingId: id
            })
        }).then(res => res.json()).then(data => data).catch(err => err);
        if (response.length) {
            return response[0].status.toLowerCase();
        }
    }
    return null;
}