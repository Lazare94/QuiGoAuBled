import PhoneInput from 'react-native-phone-input'
export function componentDidMount(){
    this.setState({
        pickerData: this.phone.getPickerData()
    })
}
 function onPressFlag(){
    this.myCountryPicker.open()
}

function selectCountry(country){
    this.phone.selectCountry(country.iso2)
}

export function flagN(){
    return(
        <View style={styles.container}>
            <PhoneInput
                ref={(ref) => { this.phone = ref; }}
                onPressFlag={this.onPressFlag}
                initialCountry={'us'}
                initialValue="13178675309"
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />

            <ModalPickerImage
                ref={(ref) => { this.myCountryPicker = ref; }}
                data={this.state.pickerData}
                onChange={(country)=>{ this.selectCountry(country) }}
                cancelText='Cancel'
            />
        </View>
    )
}