const { Category } = require('../models/Category');
const { successHandler, errorHandler } = require('../utils/handler');

const category_data = [{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544ea"
    },
    "category": "Arts & Crafts",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51KtAhkaSuL.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544eb"
    },
    "category": "Automotive",
    "url": "https://images-na.ssl-images-amazon.com/images/I/31ufUqVz8TL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544ec"
    },
    "category": "Baby Products",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51wmH8yyGxL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544ed"
    },
    "category": "Beauty & Personal Care",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41O2VEDHcpL.jpg|https://images-na.ssl-images-amazon.com/images/I/41eHLlXPfXL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544ee"
    },
    "category": "Cell Phones & Accessories",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41%2B6SP8FEaL.jpg|https://images-na.ssl-images-amazon.com/images/I/41%2BIiCpdR7L.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544ef"
    },
    "category": "Clothing & Shoes",
    "url": "https://images-na.ssl-images-amazon.com/images/I/314rdsW5WLL.jpg|https://images-na.ssl-images-amazon.com/images/I/413N%2BekN88L.jpg|https://images-na.ssl-images-amazon.com/images/I/51fUN4SzEkL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f0"
    },
    "category": "Electronics",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41Ur8ETZYHL.jpg|https://images-na.ssl-images-amazon.com/images/I/513aqZwDI2L.jpg|https://images-na.ssl-images-amazon.com/images/I/51SpOXHbCoL.jpg|https://images-na.ssl-images-amazon.com/images/I/51eEotqTaJL.jpg|https://images-na.ssl-images-amazon.com/images/I/51C8lQfVTcL.jpg|https://images-na.ssl-images-amazon.com/images/I/51pMt29Qt2L.jpg|https://images-na.ssl-images-amazon.com/images/I/51JBZau3PRL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f1"
    },
    "category": "Grocery & Gourmet Food",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41OvEQt52EL.jpg|https://images-na.ssl-images-amazon.com/images/I/41%2Byaejx8RL.jpg|https://images-na.ssl-images-amazon.com/images/I/41Uc4CALeHL.jpg|https://images-na.ssl-images-amazon.com/images/I/51Xe0lnB0LL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f2"
    },
    "category": "Health & Household",
    "url": "https://images-na.ssl-images-amazon.com/images/I/516DpjH2x3L.jpg|https://images-na.ssl-images-amazon.com/images/I/51bUbmLjmmL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f3"
    },
    "category": "Hobbies",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41z0eLjnk1L.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f4"
    },
    "category": "Home & Kitchen",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51iAe3LF7FL.jpg|https://images-na.ssl-images-amazon.com/images/I/417B20oEehL.jpg|https://images-na.ssl-images-amazon.com/images/I/41J3bDg633L.jpg|https://images-na.ssl-images-amazon.com/images/I/51hhnuGWwdL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f5"
    },
    "category": "Industrial",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41RxPpuJ0kL.jpg|https://images-na.ssl-images-amazon.com/images/I/413hu4DXhFL.jpg|https://images-na.ssl-images-amazon.com/images/I/516l-4x5hZL.jpg|https://images-na.ssl-images-amazon.com/images/I/51NPo7NdvmL.jpg|https://images-na.ssl-images-amazon.com/images/I/41HiYGVYW9L.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f6"
    },
    "category": "Movies & TV",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51zGffXsYrL.jpg|https://images-na.ssl-images-amazon.com/images/I/519PqgnquiL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f7"
    },
    "category": "Musical Instruments",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41DI-qHjOPL.jpg|https://images-na.ssl-images-amazon.com/images/I/51CevYtB0vL.jpg|https://images-na.ssl-images-amazon.com/images/I/416xFXl7plL.jpg|https://images-na.ssl-images-amazon.com/images/I/41batiOmSAL.jpg|https://images-na.ssl-images-amazon.com/images/I/31j0beoJWuL.jpg|https://images-na.ssl-images-amazon.com/images/I/41x2SWpeWwL.jpg|https://images-na.ssl-images-amazon.com/images/I/61hSwyHEf0L.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f8"
    },
    "category": "Office Products",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51haaK-xYiL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544f9"
    },
    "category": "Patio, Lawn & Garden",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41xKVNjgx5L.jpg|https://images-na.ssl-images-amazon.com/images/I/4188h9xiG0L.jpg|https://images-na.ssl-images-amazon.com/images/I/51-2Zrux0xL.jpg|https://images-na.ssl-images-amazon.com/images/I/51PmCfiuQuL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544fa"
    },
    "category": "Pet Supplies",
    "url": "https://images-na.ssl-images-amazon.com/images/I/31OFz0j98cL.jpg|https://images-na.ssl-images-amazon.com/images/I/61kP0i8owAL.jpg|https://images-na.ssl-images-amazon.com/images/I/51aisSIU1fL.jpg|https://images-na.ssl-images-amazon.com/images/I/51bYg916xIL.jpg|https://images-na.ssl-images-amazon.com/images/I/41k5Ix%2BtMbL.jpg|https://images-na.ssl-images-amazon.com/images/I/41c0rt7HKuL.jpg|https://images-na.ssl-images-amazon.com/images/I/51HwbzjnbyL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544fb"
    },
    "category": "Remote & App Control",
    "url": "https://images-na.ssl-images-amazon.com/images/I/41XrEAsufaL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544fc"
    },
    "category": "Sports & Outdoors",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51j3fPQTQkL.jpg|https://images-na.ssl-images-amazon.com/images/I/31hKM3cSoSL.jpg|https://images-na.ssl-images-amazon.com/images/I/51WlHdwghfL.jpg|https://images-na.ssl-images-amazon.com/images/I/51FsyLRBzwL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544fd"
    },
    "category": "Tools & Home Improvement",
    "url": "https://images-na.ssl-images-amazon.com/images/I/31FSCOv3hoL.jpg|https://images-na.ssl-images-amazon.com/images/I/41BezNJK0EL.jpg|https://images-na.ssl-images-amazon.com/images/I/5150BQeCbML.jpg|https://images-na.ssl-images-amazon.com/images/I/51VxgFrm4hL.jpg|https://images-na.ssl-images-amazon.com/images/I/41ZdSd2pCIL.jpg|https://images-na.ssl-images-amazon.com/images/I/41hXHC-if8L.jpg|https://images-na.ssl-images-amazon.com/images/I/51hOS2klyxL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544fe"
    },
    "category": "Toys & Games",
    "url": "https://images-na.ssl-images-amazon.com/images/I/513cBC8PqpL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg"
  },{
    "_id": {
      "$oid": "61b2f9d4eeca898b6e6544ff"
    },
    "category": "Video Games",
    "url": "https://images-na.ssl-images-amazon.com/images/I/618aI9c4NzL.jpg|https://images-na.ssl-images-amazon.com/images/I/51M98LkEAPL.jpg|https://images-na.ssl-images-amazon.com/images/I/51H9DN%2Bq%2BSL.jpg|https://images-na.ssl-images-amazon.com/images/I/51DSUBkqfZL.jpg|https://images-na.ssl-images-amazon.com/images/I/51fP1LTcFRL.jpg|https://images-na.ssl-images-amazon.com/images/I/51Uj3L-0hdL.jpg|https://images-na.ssl-images-amazon.com/images/I/51vBj2xMUdL.jpg|https://images-na.ssl-images-amazon.com/images/I/51XGAd8lN8L.jpg|https://images-na.ssl-images-amazon.com/images/I/51CCH6J-97L.jpg|https://images-na.ssl-images-amazon.com/images/I/61qn516qttL.jpg"
  }]
module.exports = {
    fetchAll: (req, res , next) => {
        // Category
        // .find()
        // .exec
        // ((err, result) => {
        //     if (err) errorHandler(req, res, err);
        //     else successHandler(req, res, 'Category listed successfully', result);
        // })
        return res.send(category_data)
    },
    AddCategory : (req,res,next) => {
        try {
            // Category.create(req, (err, result) => {
            //     if (err) errorHandler(req, res, err);
            //     else successHandler(req, res, 'Category created successfully', result);
            // }); 
            console.log(req.body , "=======REQ BODY=========")
            res.send("Successfully created")
        }
        catch (err) {
            console.log(err , "Error on contACT US CREATE")
            res.send("Failed to store")
        }
           
    }
}