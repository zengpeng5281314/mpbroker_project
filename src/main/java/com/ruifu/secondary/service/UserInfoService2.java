package com.ruifu.secondary.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ruifu.secondary.dao.UserInfoDAO2;
import com.ruifu.secondary.entity.TUserInfo;


@Service
public class UserInfoService2 {

	@Autowired 
	UserInfoDAO2 userInfoDAO;
	
	public List<TUserInfo> findAll(){
		return userInfoDAO.findAll();
	}
}
