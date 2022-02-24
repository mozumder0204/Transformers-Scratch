const Transformer = require("../models/TransformerModel");
const {
  transformerAddValidate,
  transformerUpdateValidate,
} = require("../validate/transformer-validation.js");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
var fs = require("fs");

mongoose.set("useFindAndModify", false);

exports.transformerList = [
  async (req, res) => {
    try {
      await Transformer.find(
        { isDisabled: false },
        {
          fullName: 1,
          designation: 1,
          employeeId: 1,
          mobileNo: 1,
          imagePath: 1,
          createdAt: 1,
          createdBy: 1,
          isDisabled: 1,
        },
        {
          $sort: {
            _id: -1,
          },
        }
      ).then((transformers) => {
        if (transformers.length > 0) {
          return apiResponse.successResponseWithData(
            res,
            "Operation success",
            transformers
          );
        } else {
          return apiResponse.successResponseWithData(
            res,
            "Operation success",
            []
          );
        }
      });
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.transformerAdd = [
  async (req, res) => {
    try {
      const { error } = transformerAddValidate.validate(req.body);
      if (error) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          error.details[0].message
        );
      }

      const imageName = `transformer${Date.now()}`;
      const imagePath = `http://${req.get(
        "host"
      )}/files/transformerImage/${imageName}.jpg`;

      var transformer = new Transformer({
        fullName: req.body.fullName,
        designation: req.body.designation,
        employeeId: req.body.employeeId,
        mobileNo: req.body.mobileNo,
        imagePath: imagePath,
        createdAt: Date.now(),
        createdBy: "ADMIN001",
      });

      await transformer.save(function (err) {
        if (err) {
          return apiResponse.ErrorResponse(res, err);
        }
        fs.writeFileSync(
          "./files/transformerImage/" + imageName + ".jpg",
          req.body.base64Data,
          "base64"
        );
        return apiResponse.successResponseWithData(
          res,
          "Transformer add Success.",
          transformer
        );
      });
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
