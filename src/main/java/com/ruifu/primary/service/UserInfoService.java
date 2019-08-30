package com.ruifu.primary.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ruifu.primary.dao.UserInfoDAO;
import com.ruifu.primary.entity.TUserInfo;

@Service
public class UserInfoService {

	@Autowired 
	UserInfoDAO userInfoDAO;
	
	public List<TUserInfo> findAll(){
		return userInfoDAO.findAll();
	}
	
}
