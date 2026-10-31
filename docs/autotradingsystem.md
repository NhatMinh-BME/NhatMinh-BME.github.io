# Automated Trading System

A personal software project exploring an automated pipeline between TradingView alerts and MetaTrader 4/5.

## System overview

Pine Script was used to develop and backtest a strategy in TradingView. A bridge connected TradingView webhooks to MetaTrader: Google Cloud Functions received alerts, Firebase Realtime Database stored trade requests, and MetaTrader clients read those requests for execution. The system also included a risk-management component.

The strategy is private. This page focuses on the software integration and does not make claims about profitability or future performance. Backtest results do not guarantee live trading outcomes.

## Project images

### Strategy and backtesting

![TradingView strategy and backtest view](/images/tradingsystem/1.png)

![TradingView strategy configuration](/images/tradingsystem/2.png)

### Alert bridge

![Trading alert bridge configuration](/images/tradingsystem/3.png)

![Trade request handling setup](/images/tradingsystem/4.png)

### MetaTrader

![MetaTrader trade execution interface](/images/tradingsystem/5.png)
