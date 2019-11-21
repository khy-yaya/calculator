//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentValue: '',
    isDone: false,
  },
  onLoad: function () {
    wx.redirectTo({
      // url: '/pages/test/test',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  inputIsActionSymbol(input) {
    return input.match(/\d/) == null;
  },
  // 设置值
  ralculatorInput: function(e) {
    let calculatorValue = e.target.dataset.text;
    
    if( this.data.currentValue == '') {
      this.setData({
        currentValue: calculatorValue
      })
    }
    else if (this.data.isDone) {
      let isDone = false;
      if (this.inputIsActionSymbol(calculatorValue)) {
        calculatorValue = this.data.currentValue + calculatorValue;
      }
      this.setData({
        isDone,
        currentValue: calculatorValue
      })
    }
    // 运算时设置的值
    else {
      let result = 0;
      let _currentValue = this.data.currentValue + calculatorValue;
      let pullreg = RegExp(/\+/);
      let minusreg = RegExp(/\-/);
      let timereg = RegExp(/\x/);
      let divreg = RegExp(/\÷/);
      let equalsreg = RegExp(/\=/);
      this.setData({
        currentValue: _currentValue
      })
      // 加法
      if( pullreg.test(_currentValue) &&  equalsreg.test(_currentValue) ) {
        let pullArr = _currentValue.split("+");
        let reducer = (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue);
        result = pullArr.reduce(reducer);
      }
      // 减法
      else if( minusreg.test(_currentValue) &&  equalsreg.test(_currentValue) ) {
        let minusArr = _currentValue.split("-");
        let reducer = (accumulator, currentValue) => parseFloat(accumulator) - parseFloat(currentValue);
        result = minusArr.reduce(reducer);
      }
      // 乘法
      else if( timereg.test(_currentValue) &&  equalsreg.test(_currentValue) ) {
        let timeArr = _currentValue.split("x");
        let reducer = (accumulator, currentValue) => parseFloat(accumulator) * parseFloat(currentValue);
        result = timeArr.reduce(reducer);
      }
      // 除法
      else if( divreg.test(_currentValue) &&  equalsreg.test(_currentValue) ) {
        let divArr = _currentValue.split("÷");
        let reducer = (accumulator, currentValue) => parseFloat(accumulator) / parseFloat(currentValue);
        result = divArr.reduce(reducer);
      }
      if (result) {
        this.setData({
          currentValue: result,
          isDone: true
        });
      }
    }
  },
  // 清除
  ralculatorClear: function(e) {
    this.setData({
      currentValue: ''
    })
  },
  // 删除最后一个
  ralculatorDelect: function(e) {
    let _number = this.data.currentValue.toString();
    let clearCurrentLength = _number.length;
    if(!clearCurrentLength) {
      return ;
    }
    let clearCurrent = _number.substr(0,clearCurrentLength-1)
    this.setData({
      currentValue: clearCurrent + ''
    })
  },
  // 转正负数
  ralculatorPrint: function(e) {
    if(this.data.currentValue > 0) {
      this.setData({
        currentValue: '-' + this.data.currentValue
      })
    }
    else if(this.data.currentValue < 0) {
      this.setData({
        currentValue: Math.abs(this.data.currentValue)
      })
    }
  }
})
