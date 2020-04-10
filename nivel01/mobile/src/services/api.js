import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.145:3333'
})

export default api;

/**
 * iOS com emulador: localhost
 * iOs com fisico: IP da maquina
 * 
 * Android com emulador: (adb reverse)
 * Android com emulador: 10.0.2.2 (android studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com fisico: IP da máquina
 */