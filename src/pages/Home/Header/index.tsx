import React, { useState } from "react";
import {DownOutlined, GithubOutlined} from '@ant-design/icons'
import "./index.less"

const Header = () => {
  return (
    <div className="h-p">
        <div>
            <div><GithubOutlined />稀土掘金</div>
            <div>课程</div>
            <div>APP</div>
            <div>码上掘金</div>
            <div>会员</div>
            <div>人气作者榜单</div>
        </div>
        <div>
            <select>前端</select>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
};

export default Header;
