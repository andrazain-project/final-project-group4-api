import baseAPI from "$root/page/base-api";

const restfulBooker = {
    createToken     : (data) => baseAPI.post('/auth', data),
    createBooking   : (data) => baseAPI.post('/booking', data)
}

export default restfulBooker;