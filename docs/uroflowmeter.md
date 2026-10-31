# Uroflowmeter Development

This project documents the development of an embedded uroflowmeter and companion PC application. The system combines sensor data acquisition, on-device storage, data transfer, and a desktop interface for reviewing flow measurements.

## System overview

- **Embedded platform:** ESP32-S3 with C++, FreeRTOS, and ADC filtering
- **Data handling:** Measurements are stored on the device and can be transferred over USB or uploaded to Firebase Realtime Database
- **PC application:** A C# application displays measurements, flow-rate graphs, and history
- **Electronics:** Custom PCB design, power management, and a USB hub IC
- **Mechanical design:** Fusion 360 enclosure, PETG 3D-printed parts, and an acrylic top panel

The device interface is designed around two buttons. The project also includes Wi-Fi-based over-the-air firmware updates.

## Design work

### PCB

![Uroflowmeter PCB layout](/images/uroflowmeter/pcb1.jpg)

![Uroflowmeter PCB](/images/uroflowmeter/pcb2.jpg)

![Uroflowmeter electronics](/images/uroflowmeter/pcb3.jpg)

### Enclosure and product design

![Uroflowmeter enclosure CAD](/images/uroflowmeter/3ddesign1.png)

![Uroflowmeter enclosure detail](/images/uroflowmeter/3ddesign2.jpg)

![Uroflowmeter enclosure assembly](/images/uroflowmeter/3ddesign3.jpg)

![Uroflowmeter enclosure detail](/images/uroflowmeter/3ddesign4.jpg)

![Uroflowmeter enclosure detail](/images/uroflowmeter/3ddesign5.jpg)

![Uroflowmeter enclosure detail](/images/uroflowmeter/3ddesign6.jpg)

![Uroflowmeter enclosure detail](/images/uroflowmeter/3ddesign8.jpg)

![Uroflowmeter product label](/images/uroflowmeter/label.png)

### PC application

![Uroflowmeter desktop application](/images/uroflowmeter/software.png)

This page describes engineering work on a device prototype; it does not claim clinical validation or regulatory approval.
