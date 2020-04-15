var request = require("request");
var Telegraf = require('telegraf')
require('dotenv').config()
console.log(process.env.API_KEY2)


var options = {
  method: 'GET',
  url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
  qs: {country: 'Canada'},
  headers: {
    'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY1
  }
};



var options2 = {
  method: 'GET',
  url: 'https://coronavirus-info.p.rapidapi.com/country',
  qs: {name: 'Canada'},
  headers: {
    'x-rapidapi-host': 'coronavirus-info.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY1
  }
};




var ab={},nl={},pe={},ns={},nb={},qc={},on={},mb={},sk={},bc={},yt={},nt={}


const bot = new Telegraf(process.env.API_KEY2)
bot.start((ctx) => ctx.reply('Welcome to Canada Covid-19 Information Bot \n\n/help for assistance'))


bot.help((ctx) => {
  ctx.reply('Following are the province wise report tags, use /Canada to get Canada covid status \nType your province code and hit send to get COVID-19 stastics \n/NL-Newfoundland and Labrador,\n\n/PE	-Prince Edward Island,\n\n/NS-Nova Scotia,\n\n/NB-New Brunswick,\n\n/QC-Quebec,\n\n/ON-Ontario,\n\n/MB-Manitoba,\n\n/SK-Saskatchewan,\n\n/AB-Alberta,\n\n/BC-British Columbia,\n\n/YT-Yukon,\n\n/NT-Northwest Territories,\n/NU-Nunavut')
  
})

bot.command('Canada', (ctx)=>{
  request(options2, function (error, response, body) {
    if (error) throw new Error(error);
    const obj2 = JSON.parse(body);
    ctx.reply("Country: " + obj2.country.country_name + "\n\nTotal Case: " + obj2.country.total_cases + "\nTotal Deaths: " + obj2.country.total_deaths + "\nTotal Recovered: "+ obj2.country.total_recovered + "\n\n/help for assistance")
    //console.log(body);
  })
})

bot.command('AB',(ctx)=>{
  request(options, function (error, response, body) {
    const obj = JSON.parse(body);
    if (error) throw new Error(error);
    obj.data.covid19Stats.forEach(element => {
        if(element.province==="Alberta") {ab=element
          console.log(ab.lastUpdate)
          ctx.reply("Name: " + ab.keyId + "\n" + "Death: " + ab.deaths + "\n" + "Confirmed: "+ ab.confirmed + "\n" + "Recovered: "+ ab.recovered + "\n" + "Last Updated: " + ab.lastUpdate  +"\n\n/help for assistance \n\n use /Canada to get Canada covid status")
        }  
    });
});
})

bot.command('NL',(ctx)=>{
  request(options, function (error, response, body) {
    const obj = JSON.parse(body);
    if (error) throw new Error(error);
    obj.data.covid19Stats.forEach(element => {
        if(element.province==="Newfoundland and Labrador") {nl=element 
      ctx.reply("Name: " + nl.keyId + "\n" + "Death: " + nl.deaths + "\n" + "Confirmed: "+ nl.confirmed + "\n" + "Recovered: "+ nl.recovered+ "\n" + "Last Updated: " + nl.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
      }
    })
})
})

bot.command('PE',(ctx)=>{
  request(options, function (error, response, body) {
    const obj = JSON.parse(body);
    if (error) throw new Error(error);
    obj.data.covid19Stats.forEach(element => {
        if(element.province==="Prince Edward Island") {pe=element
          ctx.reply("Name: " + pe.keyId + "\n" + "Death: " + pe.deaths + "\n" + "Confirmed: "+ pe.confirmed + "\n" + "Recovered: "+ pe.recovered+ "\n" + "Last Updated: " + pe.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
        }  
    });
});
})

bot.command('NS',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="Nova Scotia") {ns=element
            ctx.reply("Name: " + ns.keyId + "\n" + "Death: " + ns.deaths + "\n" + "Confirmed: "+ ns.confirmed + "\n" + "Recovered: "+ ns.recovered+ "\n" + "Last Updated: " + ns.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
          }  
      });
  });
})

bot.command('NB',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="New Brunswick") {nb=element
            ctx.reply("Name: " + nb.keyId + "\n" + "Death: " + nb.deaths + "\n" + "Confirmed: "+ nb.confirmed + "\n" + "Recovered: "+ nb.recovered+ "\n" + "Last Updated: " + nb.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
          }  
      });
  });
})

bot.command('QC',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="Quebec") {qc=element
            ctx.reply("Name: " + qc.keyId + "\n" + "Death: " + qc.deaths + "\n" + "Confirmed: "+ qc.confirmed + "\n" + "Recovered: "+ qc.recovered+ "\n" + "Last Updated: " + qc.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
          }  
      });
  });
})

bot.command('ON',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="Ontario") {on=element
            ctx.reply("Name: " + on.keyId + "\n" + "Death: " + on.deaths + "\n" + "Confirmed: "+ on.confirmed + "\n" + "Recovered: "+ on.recovered+ "\n" + "Last Updated: " + on.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
          }  
      });
  });
})

bot.command('MB',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="Manitoba") {mb=element
            ctx.reply("Name: " + mb.keyId + "\n" + "Death: " + mb.deaths + "\n" + "Confirmed: "+ mb.confirmed + "\n" + "Recovered: "+ mb.recovered+ "\n" + "Last Updated: " + mb.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
            }  
      });
  });
})

bot.command('SK',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="Saskatchewan") {sk=element
            ctx.reply("Name: " + sk.keyId + "\n" + "Death: " + sk.deaths + "\n" + "Confirmed: "+ sk.confirmed + "\n" + "Recovered: "+ sk.recovered+  "\n" + "Last Updated: " + sk.lastUpdate  +"\n\n/help for assistance \n\n use /canada to get Canada covid status")}  
      });
  });
})

bot.command('BC',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="British Columbia") {bc=element
            ctx.reply("Name: " + bc.keyId + "\n" + "Death: " + bc.deaths + "\n" + "Confirmed: "+ bc.confirmed + "\n" + "Recovered: "+ bc.recovered+ "\n" + "Last Updated: " + bc.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
          }  
      });
  });
})

bot.command('YT',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="Yukon") {yt=element
            ctx.reply("Name: " + yt.keyId + "\n" + "Death: " + yt.deaths + "\n" + "Confirmed: "+ yt.confirmed + "\n" + "Recovered: "+ yt.recovered+ "\n" + "Last Updated: " + yt.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")
          }  
      });
  });
})

bot.command('NT',(ctx)=>{
    request(options, function (error, response, body) {
      const obj = JSON.parse(body);
      if (error) throw new Error(error);
      obj.data.covid19Stats.forEach(element => {
          if(element.province==="Northwest Territories") {nt=element
            ctx.reply("Name: " + nt.keyId + "\n" + "Death: " + nt.deaths + "\n" + "Confirmed: "+ nt.confirmed + "\n" + "Recovered: "+ nt.recovered+ "\n" + "Last Updated: " + nt.lastUpdate  + "\n\n/help for assistance \n\n use /canada to get Canada covid status")}  
      });
  });
})

bot.command('NU',(ctx)=>{
  ctx.reply("Name: " + "Nunavut" + "\n" + "Death: " + "0" + "\n" + "Confirmed: "+ "0" + "\n" + "Recovered: "+ "O")
})


bot.launch()
 