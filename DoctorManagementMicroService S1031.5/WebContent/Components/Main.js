$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

$(document).on("click", "#btnSave", function(event) { 

	// Clear status msges-------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();
	
	//Form validation-------------------
	var status = validateDoctorForm();
	 

	// If not valid
	if (status != true)
	{
	
		$("#alertError").text(status);
		$("#alertError").show();

	return;
}
	
	//If valid
	var type = ($("#hidDoctorIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
			{
			 url : "DoctorsAPI",
			 type : type,
			 data : $("#formDoctor").serialize(),
			 dataType : "text",
			 complete : function(response, status)
			 {
				 onDoctorSaveComplete(response.responseText, status);
			 }
			});

}); 

function onDoctorSaveComplete(response, status) {

	if (status == "success")
	{
			var resultSet = JSON.parse(response);

	if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divDoctorGrid").html(resultSet.data);
	} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
			}

	} else if (status == "error") {
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
	} else {
			$("#alertError").text(
						"Unknown error while saving..");
			$("#alertError").show();
		}

			$("#hidDoctorIDSave").val("");
			$("#formDoctor")[0].reset();
	}



//UPDATE==========================================
$(document).on("click",".btnUpdate", function(event) {
	
$("#hidDoctorIDSave").val($(this).closest("tr").find('#hidDoctorIDUpdate').val());
$("#m_SLMCNO").val($(this).closest("tr").find('td:eq(1)').text());
$("#m_doctor_userName").val($(this).closest("tr").find('td:eq(2)').text());
$("#m_doctor_password").val($(this).closest("tr").find('td:eq(3)').text());
$("#m_doctor_name").val($(this).closest("tr").find('td:eq(4)').text());
$("#m_doctor_address").val($(this).closest("tr").find('td:eq(5)').text());
$("#m_doctor_speciality").val($(this).closest("tr").find('td:eq(6)').text());
$("#m_doctor_sex").val($(this).closest("tr").find('td:eq(7)').text());
$("#m_doctor_dateOfBirth").val($(this).closest("tr").find('td:eq(8)').text());
$("#m_doctor_qualification").val($(this).closest("tr").find('td:eq(9)').text());
$("#m_doctor_email").val($(this).closest("tr").find('td:eq(10)').text());
$("#m_doctor_phone").val($(this).closest("tr").find('td:eq(11)').text());
$("#m_doctor_dateOfJoin").val($(this).closest("tr").find('td:eq(12)').text());
$("#m_doctor_fees").val($(this).closest("tr").find('td:eq(13)').text());
$("#m_doctor_workingDays").val($(this).closest("tr").find('td:eq(14)').text());
});

$(document).on("click", ".btnRemove", function(event) {

	$.ajax({
		url : "DoctorsAPI",
		type : "DELETE",
		data : "t_payment_no=" + $(this).data("t_payment_no"),
		dataType : "text",
		complete : function(response, status) {
			onPaymentDeleteComplete(response.responseText, status);
		}	
	});
});

function onPaymentDeleteComplete(response, status) {
	if (status == "success") {
		
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();

			$("#divDoctorGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

function validateDoctorForm()
{

    // SLMCNO
    if ($("#m_SLMCNO").val().trim() == "")
    {
         return "Insert Doctor SLMCNO.";
    }
    
    // userName
    if ($("#m_doctor_userName").val().trim() == "")
    {
         return "Insert Doctor UserName.";
    }
    
    // password
    if ($("#m_doctor_password").val().trim() == "")
    {
         return "Insert Doctor password.";
    }
    
    // NAME
    if ($("#m_doctor_name").val().trim() == "")
    {
         return "Insert Doctor name.";
    }
    
    // address
    if ($("#m_doctor_address").val().trim() == "")
    {
         return "Insert Doctor address.";
    }
    
    // speciality
    if ($("#m_doctor_speciality").val().trim() == "")
    {
         return "Insert Doctor speciality.";
    }
    
    // GENDER
    if ($("#m_doctor_sex").val().trim() == "")
    {
        return "Select gender.";
    }
    
    // dateOfBirth
    if ($("#m_doctor_dateOfBirth").val().trim() == "")
    {
         return "Insert Doctor dateOfBirth.";
    }
    
    // qualification
    if ($("#m_doctor_qualification").val().trim() == "")
    {
         return "Insert Doctor qualification.";
    }
    
    // email
    if ($("#m_doctor_email").val().trim() == "")
    {
         return "Insert Doctor email.";
    }
		
    // phone
    if ($("#m_doctor_phone").val().trim() == "")
    {
         return "Insert Doctor phone.";
    }
    
    // dateOfJoin
    if ($("#m_doctor_dateOfJoin").val().trim() == "")
    {
         return "Insert Doctor dateOfJoin.";
    }
    
    // fees
    if ($("#m_doctor_fees").val().trim() == "")
    {
         return "Insert Doctor fees.";
    }
    
    // workingDays
    if ($("#m_doctor_workingDays").val().trim() == "")
    {
         return "Insert Doctor workingDays.";
    }
    
    
    return true;
}


