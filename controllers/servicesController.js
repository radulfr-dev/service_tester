const axios = require('axios');

function ServicesController(){
    // Place an order for 100 for each service except for saves. 50 saves.
    //
    //

    const suppliers = [
        {
            supplier: "Jap",
            url: 'https://justanotherpanel.com/api/v2'
        },
        {
            supplier: "SmmLite",
            url: 'http://smmlite.com/api/v2'
        },
        {
            supplier: "Followiz",
            url: 'https://followiz.com/api/v2'
        },
        {
            supplier: "InstantPanel",
            url: 'https://instantpanel.net/api/v2'
        },
        {
            supplier: "RealSite/Smo",
            url: 'https://realsite.shop/api/v2'
        }
    ]

    function selectRandomSupplier(){
        return suppliers[Math.floor(Math.random() * suppliers.length)];
    }

    function getSupplierServices(){

    }

    return { selectRandomSupplier };
}

module.exports = ServicesController();
