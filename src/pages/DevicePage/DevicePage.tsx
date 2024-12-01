import { useEffect, useState } from "react";
import "./DevicePage.css";
import { axiosInstance } from "../../api";
import Device, { DeviceProps } from "./Device";

const DevicePage = () => {
  const [devices, setDevices] = useState<DeviceProps[]>([]);
  useEffect(() => {
    const fetchAndSet = async () => {
      const res = await axiosInstance.get("/device_status");
      setDevices(res.data);
    };
    const interverId = setInterval(fetchAndSet, 5000);
    return ()=> clearInterval(interverId) 
  }, []);
  
  return (
    <div className="device-status-body">
      <header className="header">
        <h1 className="header-title">스마트 안전모</h1>
        <div className="user-info">
          <div className="account">
            <div>관리자ID님</div>
          </div>
          <a href="/" className="logout">
            <button className="logout-button"></button>
          </a>
        </div>
      </header>

      <div className="device-manage">
        <h1 className="page-title">기기 상태 관리</h1>
        <div className="search-wrap">
          <div className="search-options">
            <div className="input-box">
              <input type="radio" id="all" name="active_option" value="all" checked />
              <label htmlFor="all">전체</label>
            </div>
            <div className="input-box">
              <input type="radio" id="run" name="active_option" value="run" />
              <label htmlFor="run">켜짐</label>
            </div>
            <div className="input-box">
              <input type="radio" id="stop" name="active_option" value="stop" />
              <label htmlFor="stop">꺼짐</label>
            </div>
          </div>
          <div className="current_device">{/* <span>켜진 기기 / 전체 기기 <p> {{devices | selectattr('전원상태', 'equalto', true) | list | length}} / {{devices | length}} </p></span> */}</div>
        </div>
      </div>

      <div className="device-status-container">
        <div className="table-style">
          <table className="device-status-table">
            <thead>
              <tr>
                <th className="table-header">디바이스명</th>
                <th className="table-header">전원상태</th>
                <th className="table-header">착용상태</th>
                <th className="table-header">최근 켠 시간</th>
                <th className="table-header">마지막 끈 시간</th>
                <th className="table-header">비상</th>
                <th className="table-header">삭제</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <Device {...device} key={device.id}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DevicePage;
