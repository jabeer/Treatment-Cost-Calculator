var args = arguments[0] || 0;

 /*
		 Gender:rec.Gender,
		 Age:rec.Age,
		 Email:rec.Email,
		 Address:rec.Address,
		 SchoolAddress:rec.SchoolAddress*/
$.personName.setText(args.FirstName + ' '+ args.LastName);
$.fullName.setText(args.FirstName + ' '+ args.LastName);
$.gender.setText(args.Gender);
$.age.setText(args.Age);
$.email.setText(args.Email);
$.homeAddress.setValue(args.Address);
$.daughterAddress.setValue(args.SchoolAddress);

