function CallData() {
    this.layData = function() {
        return axios({
            url: 'https://60d5dbf9943aa60017768c58.mockapi.io/DessingRoom',
            method: 'Get'
        })
    }
}