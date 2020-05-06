<%@ page import="com.model.Doctor" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Doctor details</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Main.js"></script>

</head>
<body>

<div class="container">
<div class="row">
<div class="col-8">

 <h1 class="m-3">Doctor details</h1>

     <form id="formDoctor">

	<!-- m_SLMCNO -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 
 		<span class="input-group-text" id="lblName" style="width:158px">SLMCNO: </span>
	</div>
		<input type="text" id="m_SLMCNO" name="m_SLMCNO">
	</div>

	<!-- userName -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 
 		<span class="input-group-text" id="lblName" style="width:158px">UserName: </span>
	</div>
		<input type="text" id="m_doctor_userName" name="m_doctor_userName">
	</div>

	<!-- password -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 
 		<span class="input-group-text" id="lblName" style="width:158px">password: </span>
	</div>
		<input type="text" id="m_doctor_password" name="m_doctor_password">
	</div>
	
	<!-- NAME -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 
 		<span class="input-group-text" id="lblName" style="width:158px">Name: </span>
	</div>
		<input type="text" id="m_doctor_name" name="m_doctor_name">
	</div>

	<!-- address -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 
 		<span class="input-group-text" id="lblName" style="width:158px">Address: </span>
	</div>
		<input type="text" id="m_doctor_address" name="m_doctor_address">
	</div>
	
	<!-- speciality -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 
 		<span class="input-group-text" id="lblName" style="width:158px">Speciality: </span>
	</div>
		<input type="text" id="m_doctor_speciality" name="m_doctor_speciality">
	</div>
	
	<!-- GENDER -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 		<span class="input-group-text" id="lblName" style="width:158px">Gender: </span>
	</div>
	      <input type="text" id="m_doctor_sex" name="m_doctor_sex">
 	</div>
 	
 	<!-- YEAR -->
		<div class="input-group input-group-sm mb-3">
		<div class="input-group-prepend">
             <span class="input-group-text" id="lblName" style="width:158px">Birth Year: </span>
       </div>
       <input type="text" id="m_doctor_dateOfBirth" name="m_doctor_dateOfBirth">
      </div>
 
	<!-- Qualification -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 		<span class="input-group-text" id="lblName" style="width:158px">Qualification: </span>
	</div>
		<input type="text" id="m_doctor_qualification" name="m_doctor_qualification">
	</div>

   <!-- Email -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 		<span class="input-group-text" id="lblName" style="width:158px">Email: </span>
	</div>
		<input type="text" id="m_doctor_email" name="m_doctor_email">
	</div>
   
   <!-- Phone -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 		<span class="input-group-text" id="lblName" style="width:158px">Phone: </span>
	</div>
		<input type="text" id="m_doctor_phone" name="m_doctor_phone">
	</div>
   
  <!-- DateOfJoin -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 		<span class="input-group-text" id="lblName" style="width:158px">DateOfJoin: </span>
	</div>
		<input type="text" id="m_doctor_dateOfJoin" name="m_doctor_dateOfJoin">
	</div>
   
   <!-- Fees -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 		<span class="input-group-text" id="lblName" style="width:158px">Fees: </span>
	</div>
		<input type="text" id="m_doctor_fees" name="m_doctor_fees">
	</div>
 
   <!-- workingDays -->
	<div class="input-group input-group-sm mb-3">
	<div class="input-group-prepend">
 
 		<span class="input-group-text" id="lblName" style="width:158px">workingDays: </span>
	</div>
		<input type="text" id="m_doctor_workingDays" name="m_doctor_workingDays">
	</div>
		    
		    
		   
 		
	   <input type="button" id="btnSave" value="Save" class="btn btn-primary">
	   <input type="hidden" id="hidDoctorIDSave" name="hidDoctorIDSave" value="">
	 </form>
	  <div id="alertSuccess" class="alert alert-success"></div>
 		    <div id="alertError" class="alert alert-danger"></div>
 <br>
 <div id="divDoctorGrid">
 <%
                  Doctor doctorObj = new Doctor();
                  out.print(doctorObj.readDoctor());
                 %>
 </div>
 </div>
 </div>
 </div>
</body>
</html>