package com.ruifu.primary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ruifu.primary.entity.TUserInfo;


public interface UserInfoDAO extends JpaRepository<TUserInfo,Integer>{

	
}
