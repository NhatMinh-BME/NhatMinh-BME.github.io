---
layout: doc
title: PT5 Reader
---

# PT5 Reader

A command-line tool that reads **Monsoon Power Monitor** `.pt5` capture files (PowerTool 5), exports the samples to CSV, and prints the device and capture information stored in the file.

## What is inside a PT5 file

| Section | Offset | Content |
|---|---|---|
| File header | 0 | Capture name, date, device serial number, calibration status, Vout setting, sample rate, captured channels (Main / USB / Aux / Marker), sample and missing counts, and average voltage, current and power per channel. |
| Status packet | 272 | Device state at capture start: firmware and protocol version, hardware revision, temperature, LEDs and status flags, USB passthrough mode, current limits, calibration (DAC, scale, zero and resistor offsets) and event code. |
| Samples | 1024 | One record per sample: a 32-bit current in µA for each captured channel, plus a 16-bit voltage whose two lowest bits are marker 0 and marker 1. Timestamps are derived from the sample index and sample rate. |

## Usage

```
Pt5Reader.exe [-f <format>] <file.pt5>
Pt5Reader.exe [-f <format>] -all
Pt5Reader.exe -i <file.pt5>
```

| Option | Description |
|---|---|
| *(none)* | Export `Seconds,Power_mW` to a CSV next to the input file. |
| `-f`, `--format` | Choose the export columns (see below). |
| `-i`, `--info` | Print device info, capture details, averages and device status. No CSV is written. |
| `-all` | Process every `.pt5` file next to the executable. |
| `-h`, `--help` | Show usage. |

### Export formats

| Format | Columns |
|---|---|
| `power` (default) | `Seconds,Power_mW` |
| `epoch` | `EpochSeconds,Voltage_V,Current_mA,Power_mW` |
| `vi` | `Seconds,Voltage_V,Current_mA` |
| `all` | `Seconds,Voltage_V,Current_mA,Power_mW` |

When both Main and USB are captured, the channel with the larger average magnitude is exported.

## Download

- [Windows executable (zip)](/tools/Pt5Reader-win.zip) — `Pt5Reader.exe` for Windows (.NET Framework 4.8, included with Windows 10/11). Unzip and run from a terminal.
- [Source code (zip)](/tools/Pt5Reader-source.zip) — C# project targeting .NET Framework 4.8; build with Visual Studio.

## Notes

- Based on the Monsoon Solutions PT5 reader example (Copyright © Monsoon Solutions, Inc.); the original copyright header is kept in the source.
- Some device-status fields may be inaccurate for older captures.
