package com.dh.login;

import java.security.Principal;
import java.util.HashMap;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;



@SpringBootApplication
@RestController
public class loginController {

	 @RequestMapping("/user")
	  public Principal user(Principal user) {
	    return user;
	  }
	
	
	 @RequestMapping(value = { "/"}, method = RequestMethod.GET)
	    public ModelAndView welcomePage() {
	        ModelAndView model = new ModelAndView();
	        model.setViewName("welcomePage");
	        return model;
	    }
	 
	    @RequestMapping(value = { "/homePage"}, method = RequestMethod.GET)
	    public ModelAndView homePage() {
	        ModelAndView model = new ModelAndView();
	        model.setViewName("Login Page Form based Authentication");
	        return model;
	    }
	     
	   @RequestMapping(value = "/login", method = RequestMethod.GET)
	    public ModelAndView loginPage(@RequestBody HashMap<String , Object> map ,@RequestParam(value = "error",required = false) String error,
	    @RequestParam(value = "logout", required = false) String logout) {
	         System.out.println("--------------------------------------------->"+map);
	        ModelAndView model = new ModelAndView();
	        if (error != null) {
	            model.addObject("error", "Invalid Credentials provided.");
	        }
	 
	        if (logout != null) {
	            model.addObject("message", "Logged out successfully.");
	        }
	 
	        model.setViewName("loginPage");
	        return model;
	    }
	 
	
	 
	
}
