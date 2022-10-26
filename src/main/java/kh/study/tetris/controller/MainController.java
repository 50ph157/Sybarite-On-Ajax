package kh.study.tetris.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	//인덱스애오 ^오^
	@GetMapping("")
	public String index() {
		return "redirect:/tetris";
	}
	
	
	
	
	
	
	
	
	
//	@GetMapping("/login")
//	public String login() {
//		
//		return "redirect:/tetris?isOpenLogin=true";
//	}
//
//	@GetMapping("/loginResult")
//	public String loginResult() {
//		
//		return "redirect:/tetris?isOpenLogin=true";
//	}
}
