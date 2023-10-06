BX.ready(function () {
  const form = document.forms['greenatom-vote']

  var oPopup = new BX.PopupWindow('call_feedback', window.body, {
    autoHide: true,
    offsetTop: 1,
    offsetLeft: 0,
    lightShadow: true,
    closeIcon: true,
    closeByEsc: true,
    overlay: {
      backgroundColor: 'black',
      opacity: '80',
    },
  })
  oPopup.setContent(BX('hideBlock'))
  BX.bindDelegate(
    document.body,
    'click',
    { className: 'finish-vote' },
    BX.proxy(function (e) {
      fetch('/opros.php', { method: 'POST', body: new FormData(form) }).finally(
        () => oPopup.show()
      )

      if (!e) e = window.event
      return BX.PreventDefault(e)
    }, oPopup)
  )


})
