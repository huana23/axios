function ProductServices() {
    this.getProductList = function() {
        return axios({
            method: 'get',
            url: 'https://62217cccafd560ea69b19429.mockapi.io/QLLT',
        });
    }

    this.addProduct = function(sp) {
        // sp: đối tượng cần thêm
        return axios({
            method: 'post',
            url: 'https://62217cccafd560ea69b19429.mockapi.io/QLLT',
            data: sp
        });
    }

    this.deleteProduct = function(id) {
        return axios({
            method: 'delete',
            url: `https://62217cccafd560ea69b19429.mockapi.io/QLLT/${id}`,
        });
    }

    this.getProduct = function(id) {
        return axios({
            method: 'delete',
            url: `https://62217cccafd560ea69b19429.mockapi.io/QLLT/${id}`,
        });
    }

    this.updateProduct = function(id, sp) {
        return axios({
            method: 'put',
            url: `https://62217cccafd560ea69b19429.mockapi.io/QLLT/${id}`,
            data:sp
        });
    }
}