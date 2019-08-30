package com.ruifu.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ruifu.config.RedisUtil;
import com.ruifu.primary.service.UserInfoService;
import com.ruifu.secondary.service.UserInfoService2;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
public class UserInfoRestController {

	@Value("${person.age}")
	private String personAge;
	

	@Autowired
	UserInfoService userInfoService;
	
	@Autowired
	UserInfoService2 userInfoService2;
	@Autowired 
	private StringRedisTemplate redisTemplate;
	@Autowired 
	RedisUtil redisUtil;
	
	@RequestMapping("/test")
	public String hello(HttpServletRequest request,HttpServletResponse response, ModelMap model) {
		model.put("now", new Date());
		List<com.ruifu.primary.entity.TUserInfo> list=null;
		List<com.ruifu.secondary.entity.TUserInfo> list2 =null;
		redisUtil.delete("list");
		redisUtil.delete("list2");
		String lis=redisUtil.get("list");
		String lis2=redisUtil.get("list2");
		if(lis==null){
			list = userInfoService.findAll();
			list2 = userInfoService2.findAll();
			redisTemplate.opsForValue().set("list",  JSONArray.fromObject(list).toString());
			redisTemplate.opsForValue().set("list2",  JSONArray.fromObject(list2).toString());
		}else{
			list = JSONArray.fromObject(lis);
			list2 = JSONArray.fromObject(lis2);
		}
		JSONObject json = new JSONObject();
		json.put("list", JSONArray.fromObject(list));
		json.put("list2", JSONArray.fromObject(list2));
		return json.toString();
	}
	
	@GetMapping("/quickDemo")
	public String quickDemo() {
		System.out.println("----"+personAge);
		return "this is quick demo for Spring Boot!"+personAge;
	}
	
}
