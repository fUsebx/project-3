from alpha_vantage.timeseries import TimeSeries
from alpha_vantage.techindicators import TechIndicators
from alpha_vantage.sectorperformance import SectorPerformances
from alpha_vantage.cryptocurrencies import CryptoCurrencies
import os
import pandas
import csv

Symbols = ['FB','AMZN','NFLX','GOOGL','AAPL']

def write_intraday(Symbols, Interval = '1min', Outputsize = 'full'):
    for sym in Symbols:
        ts = TimeSeries(key='6HBVTBNERFR7WLAJ',output_format='csv')
        data, meta_data = ts.get_intraday(symbol = sym ,interval = Interval , outputsize = Outputsize)
        filename = sym + '_intra.csv'
        myfile = open(filename,'w')
        with myfile:
            writer = csv.writer(myfile)
            writer.writerows(data)
    print("Writing complete")

def write_daily_adjusted(Symbols, Outputsize = 'compact'):

    for sym in Symbols:
        ts = TimeSeries(key='6HBVTBNERFR7WLAJ',output_format='csv')
        data, meta_data = ts.get_daily_adjusted(symbol = sym, outputsize = Outputsize )
        filename = sym + '_daily_adjusted.csv'
        myfile = open(filename,'w')
        with myfile:
            writer = csv.writer(myfile)
            writer.writerows(data)
    print("Writing complete")


def write_daily(Symbols, Outputsize = 'compact'):

    for sym in Symbols:
        ts = TimeSeries(key='6HBVTBNERFR7WLAJ',output_format='csv')
        data, meta_data = ts.get_daily(symbol = sym, outputsize = Outputsize)
        filename = sym + '_daily.csv'
        myfile = open(filename,'w')
        with myfile:
            writer = csv.writer(myfile)
            writer.writerows(data)
    print("Writing complete")
    

def write_weekly(Symbols, Outputsize = 'compact'):

    for sym in Symbols:
        ts = TimeSeries(key='6HBVTBNERFR7WLAJ',output_format='csv')
        data, meta_data = ts.get_weekly(symbol = sym, outputsize = Outputsize)
        filename = sym + '_weekly.csv'
        myfile = open(filename,'w')
        with myfile:
            writer = csv.writer(myfile)
            writer.writerows(data)
    print("Writing complete")

def write_weekly_adjusted(Symbols, outputsize = 'compact'):

    for sym in Symbols:
        ts = TimeSeries(key='6HBVTBNERFR7WLAJ',output_format='csv')
        data, meta_data = ts.get_weekly_adjusted(symbol = sym, outputsize = Outputsize)
        filename = sym + '_weekly_adjusted.csv'
        myfile = open(filename,'w')
        with myfile:
            writer = csv.writer(myfile)
            writer.writerows(data)
    print("Writing complete")

def write_monthly(Symbols):
    for sym in Symbols:
        ts = TimeSeries(key='6HBVTBNERFR7WLAJ',output_format='csv')
        data, meta_data = ts.get_monthly(symbol = sym)
        filename = sym + '_monthly.csv'
        myfile = open(filename,'w')
        with myfile:
            writer = csv.writer(myfile)
            writer.writerows(data)
    print("Writing complete")  	

def write_monthly_adjusted(Symbols):
    for sym in Symbols:
        ts = TimeSeries(key='6HBVTBNERFR7WLAJ',output_format='csv')
        data, meta_data = ts.get_monthly_adjusted(symbol = sym)
        filename = sym + '_monthly_adjusted.csv'
        myfile = open(filename,'w')
        with myfile:
            writer = csv.writer(myfile)
            writer.writerows(data)
    print("Writing complete")