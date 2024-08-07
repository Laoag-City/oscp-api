const mongoose = require('mongoose');

const OSCPApplicationSchema = new mongoose.Schema({
  owner: String,
  title: String,
  dateApplied: Date,
  conversionStatus: Boolean,
  cPermitStatus: Boolean,
  cPermitType: String,
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
},{collection: 'oscpapplications'});

module.exports = mongoose.model('OSCPApplications', OSCPApplicationSchema);
