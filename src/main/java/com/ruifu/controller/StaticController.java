package com.ruifu.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class StaticController {

	/**
	 * 微信公众号关于我们
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/wxaboutas")
	public String wxaboutas(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "wxaboutas";
	}
	
	/**
	 * 关于我们
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/aboutas")
	public String aboutas(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		
		//版本号
		String v = request.getParameter("v");
		v = StringUtils.isNotBlank(v) ? v : "2.3.0";
		model.put("v", v);
		
		return "aboutUs";
	}
	
	/**
	 * 安全保障
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/safetyGuarantee")
	public String safetyGuarantee(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "safetyGuarantee";
	}
	
	/**
	 * 用户注册授权协议
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/userAgreement")
	public String userAgreement(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "userAgreement";
	}
	
	/**
	 * 邮箱账单管理授权协议	
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/emailAgreement")
	public String emailAgreement(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "emailAgreement";
	}
	
	/**
	 * 网银账单查询授权协议	
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/billAgreement")
	public String billAgreement(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "billAgreement";
	}
	
	/**
	 * 常见问题
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/commonask")
	public String commonask(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "commonask";
	}
	
	/**
	 * 邮箱导入（免密导入）
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/leadEmail")
	public String leadEmail(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		//手机号
		String phone = request.getParameter("phone");
		model.put("phone", phone == null ? "18201326021" : phone);
		
		return "leadEmail";
	}
	
	/**
	 * 邮箱导入详情
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/mailDetail")
	public String mailDetail(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "mailDetail";
	}
	
	/**
	 * 我的消息
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/myMessage")
	public String myMessage(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		
		//标题
		String title = request.getParameter("title");
		//内容
		String content = request.getParameter("content");
		//时间
		String time = request.getParameter("time");
		
		model.put("title", title == null ? "title" : title);
		model.put("content", content == null ? "content" : content);
		model.put("time", time == null ? "time" : time);
		
		return "myMessage";
	}
	
	/**
	 * 用户隐私政策
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/privacy")
	public String privacy(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "privacy";
	}
	
	/**
	 * 仲裁长图
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping("/arbitration")
	public String arbitration(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		return "arbitration";
	}
	
}
