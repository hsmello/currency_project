import React from 'react';
import request from 'superagent';

class CurrencyService {

    findRates() {
        var url = 'http://data.fixer.io/api/latest?access_key=4209208a6d534dcec8f38c14a03adc28&base=EUR&symbols=USD,GBP,BRL';
        return request.get(url)
    }

}

export default CurrencyService