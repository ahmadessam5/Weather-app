const rquest = require('request')
const geocode = require('./utils/geocode') 
const forecast = require('./utils/forecast')

const adress = process.argv[2]
if(adress){
    geocode ( adress, (error , data ) =>{
        if(error){
            return console.log('Error ', error)
        }
        //console.log('Data ',data)
        forecast (data.latitude,data.longitude, (error,forecastData)=>{
            if(error){
               return console.log('Error ', error)
            }
            console.log(data.location)
            console.log(forecastData)
        } )
    })
}else{
    console.log('please provide an address!')
}


