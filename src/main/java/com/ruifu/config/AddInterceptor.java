package com.ruifu.config;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SuppressWarnings("deprecation")
@Component
@Configuration
public class AddInterceptor extends WebMvcConfigurerAdapter  {

	Logger log = LoggerFactory.getLogger(AddInterceptor.class);

	@Autowired
	private LoginInterceptor loginInterceptor;
	@Bean
    public LoginInterceptor getLoginInterceptor() {
        return new LoginInterceptor();
    }
	
	@Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor).addPathPatterns("/**");
        super.addInterceptors(registry);
    }
}
