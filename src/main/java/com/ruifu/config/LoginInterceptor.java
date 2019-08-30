package com.ruifu.config;

import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class LoginInterceptor extends HandlerInterceptorAdapter {

	Logger log = LoggerFactory.getLogger(LoginInterceptor.class);
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		response.setHeader("Content-type", "text/html;charset=UTF-8");
		// 这句话的意思，是告诉servlet用UTF-8转码，而不是用默认的ISO8859
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		
		String basePath = request.getContextPath();
		String path = request.getRequestURI();
		log.info("basePath:" + basePath);
		log.info("path:" + path);
		System.out.println(basePath+path);
		if (!doLoginInterceptor(path, basePath)) {// 是否进行登陆拦截
			return true;
		}

		// Enumeration<String> enumeration = request.getParameterNames();
		// StringBuffer sb = new StringBuffer("");
		// String parameterOut = "";
		// parameterOut += " uri=" + uri;
		// if (!uri.contains("guanjiaapi")) {
		// if (!uri.endsWith(".html") && !uri.endsWith(".jsp") &&
		// !uri.endsWith("ssww")) {
		// logger.info("uri=" + uri);
		// }
		// // 输出参数
		// while (enumeration.hasMoreElements()) {
		// String arg = enumeration.nextElement();
		// String value = request.getParameter(arg);
		// sb.append(arg + "=" + value + " ");
		// }
		// logger.info("\r\n args[" + sb.toString() + "]");
		// filterChain.doFilter(request, response);
		// return;
		// }
//		response.getWriter().write("非法访问~");
		return true;
	}

	/**
	 * 是否进行登陆过滤
	 * 
	 * @param path
	 * @param basePath
	 * @return
	 */
	private boolean doLoginInterceptor(String path, String basePath) {
		path = path.substring(basePath.length());
		Set<String> notLoginPaths = new HashSet<>();
		// 设置不进行登录拦截的路径：登录注册和验证码
		// notLoginPaths.add("/");
		notLoginPaths.add("/index");
		notLoginPaths.add("/api/page");
		notLoginPaths.add("/login");
		notLoginPaths.add("/register");
		notLoginPaths.add("/test");
		// notLoginPaths.add("/sys/logout");
		// notLoginPaths.add("/loginTimeout");

		if (notLoginPaths.contains(path))
			return false;
		return true;
	}
}
