import React, { Component } from 'react'

class Root extends Component {
    state = {
        natural: '',
        roman: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            roman: this.convert(this.state.natural)
        })
        console.log(this.convert(this.state.natural))
        // console.log(this.state.roman)
    }

    convert = natural => {
        const roman = {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX',
            10: 'X',
            20: 'XX',
            30: 'XXX',
            40: 'XL',
            50: 'L',
            60: 'LX',
            70: 'LXX',
            80: 'LXXX',
            90: 'XC',
            100: 'C',
            200: 'CC',
            300: 'CCC',
            400: 'CD',
            500: 'D',
            600: 'DC',
            700: 'DCC',
            800: 'DCCC',
            900: 'CM',
            1000: 'M',
            2000: 'MM',
            3000: 'MMM'

        }
        let str = String(natural).split('')
        let result = ''
        for (let i = 0; i < str.length; i++) {
            var lookup = str[i] * Math.pow(10, str.length - i - 1)
            if (roman[lookup]) {
                result += roman[lookup]
            }
        }
        return result
    }

    render() {
        console.log(this.state.natural)
        // console.log(this.convert(this.state.natural))
        const { natural, roman } = this.state
        return (
            <div className='container'>
                <div className="main-body w-50">
                    <form>
                        <div className='form-group'>
                            <label htmlFor='natural'>Enter natural number</label>
                            <input
                                type="number"
                                name="natural"
                                id="natural"
                                className='form-control'
                                value={natural}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor='roman'>Coverted roman numeral</label>
                            <p>{roman}</p>
                        </div>
                        <input
                            type="button"
                            className='btn btn-sm btn-success'
                            onClick={this.handleSubmit}
                            value="Convert"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Root
