package com.controller;

import java.io.IOException;
import java.sql.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.model.Doctor;

/**
 * Servlet implementation class DoctorsAPI
 */
@WebServlet("/DoctorsAPI")
public class DoctorsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Doctor doctorObj = new Doctor();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DoctorsAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException
	{
		// TODO Auto-generated method stub
		
		String output = doctorObj.insertDoctor(request.getParameter("m_SLMCNO"),
				request.getParameter("m_doctor_name"),
				request.getParameter("m_doctor_userName"),
				request.getParameter("m_doctor_password"),
				request.getParameter("m_doctor_address"),
				request.getParameter("m_doctor_speciality"),
				request.getParameter("m_doctor_sex"),
				Date.valueOf(request.getParameter("m_doctor_dateOfBirth")),
				request.getParameter("m_doctor_qualification"),
				request.getParameter("m_doctor_email"),
				Integer.parseInt(request.getParameter("m_doctor_phone")),
				Date.valueOf(request.getParameter("m_doctor_dateOfJoin")),
				Double.valueOf(request.getParameter("m_doctor_fees")),
				request.getParameter("m_doctor_workingDays")); 
		

		
		response.getWriter().write(output); 
		
		//doGet(request, response);
	}

	
	
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			 
			{
			 Map paras = getParasMap(request);
			 String output = doctorObj.updateDoctor(paras.get("m_SLMCNO").toString().replace("+", " "),
					 paras.get("m_doctor_name").toString().replace("+", " "),
					 paras.get("m_doctor_address").toString().replace("+", " "),
					 paras.get("m_doctor_speciality").toString().replace("+", " "),
					 paras.get("m_doctor_sex").toString().replace("+", " "),
					 Date.valueOf(paras.get("m_doctor_dateOfBirth").toString()),
					 paras.get("m_doctor_qualification").toString().replace("+", " "),
					 paras.get("m_doctor_email").toString().replace("&", "@"),
					 Integer.valueOf(paras.get("m_doctor_phone").toString()),
					 Date.valueOf(paras.get("m_doctor_dateOfJoin").toString()),
					 Double.valueOf(paras.get("m_doctor_fees").toString()),
					 paras.get("m_doctor_workingDays").toString());
			 
			 
			 response.getWriter().write(output); 
			} 

	
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException 
			{
			
			 Map paras = getParasMap(request);
			 System.out.println("Inside doctorapi delete"+paras.get("t_payment_no").toString());
			 String output = doctorObj.deleteDoctor(paras.get("t_payment_no").toString());
		
			 response.getWriter().write(output);
			}


	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{ 
		
		Map<String, String> map = new HashMap<String, String>();
		try
		 {
		    Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		    String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
		    
		    scanner.close();
		  
		    String[] params = queryString.split("&");
		    	for (String param : params) {
		
		    	String[] p = param.split("=");
		    	 map.put(p[0], p[1]); 
		 }
		
	}
	     catch (Exception e)
	 {
	 }
		
	return map; 
	
	}
		
	
}
