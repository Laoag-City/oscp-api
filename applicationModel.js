const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  owner: String,
  title: String,
  dateApplied: Date,
  conversionStatus: String,
  ownerName: String,
  applicationTitle: String,
  conversionSignatories: [
    { signatory: String,
      status: String,
      remarks: String,
      signDate: Date
    },
    {signatory:String,
      status: String,
      signDate: Date,
      remarks: String,
    },
    {signatory:String,
      status: String,
      signDate: Date,
      remarks: String,
    },
  ],
  constructionPermitSignatories: [
    { signatory: String,
      status: String,
      remarks: String,
      signDate: Date
    },
    { signatory: String,
      status: String,
      remarks: String,
      signDate: Date
    },
    { signatory: String,
      status: String,
      remarks: String,
      signDate: Date
    },
    { signatory: String,
      status: String,
      remarks: String,
      signDate: Date
    },
    {signatory:String,
      status: String,
      signDate: Date,
      remarks: String,
    },
  ]
});
/* const ApplicationSchema = new mongoose.Schema({
  owner: String,
  title: String,
  dateApplied: Date,
  signatories: [{ name: String }]
});
*/
module.exports = mongoose.model('Application', ApplicationSchema);
