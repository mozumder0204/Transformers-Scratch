var mongoose = require("mongoose");

var TranformerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    currentDateTime: {
      type: Date,
      default: Date.now(),
    },
    updateInfo: {
      type: [
        {
          updatedAt: {
            type: Date,
          },
          updatedBy: {
            type: String,
          },
          remarks: {
            type: String,
          },
        },
      ],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Tranformer", TranformerSchema);
