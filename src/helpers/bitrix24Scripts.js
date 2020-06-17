import React from "react"

function bitrix24ContactForm(data, id, cb) {
  if (!window.b24form) {
    const w = window
    const d = document
    const u = "https://omertex.bitrix24.by/bitrix/js/crm/form_loader.js"
    const b = "b24form"
    w["Bitrix24FormObject"] = b
    w[b] =
      w[b] ||
      function () {
        arguments[0].ref = u
        ;(w[b].forms = w[b].forms || []).push(arguments[0])
      }
    if (w[b]["forms"]) return
    var s = d.createElement("script")
    s.async = 1
    s.src = u + "?" + 1 * new Date()
    var h = d.getElementsByTagName("script")[0]
    h.parentNode.insertBefore(s, h)
  }

  return cb(
    <>
      <div id={id} />
      <script id="bx24_form_inline" data-skip-moving="true">
        {window.b24form(data)}
      </script>
    </>
  )
}

export const bitrix24ContactFormPopUp = cb => {
  return bitrix24ContactForm(
    {
      id: "10",
      lang: "ru",
      sec: "qf6dob",
      type: "inline",
      node: document.getElementById("contactFormPopUp"),
    },
    "contactFormPopUp",
    cb
  )
}

export const bitrix24ContactFormBottom = cb => {
  return bitrix24ContactForm(
    {
      id: "12",
      lang: "ru",
      sec: "dr375t",
      type: "inline",
      node: document.getElementById("contactFormBottom"),
    },
    "contactFormBottom",
    cb
  )
}

export const bitrix24ContactFormSection = cb => {
  return bitrix24ContactForm(
    {
      id: "14",
      lang: "ru",
      sec: "p2tvvt",
      type: "inline",
      node: document.getElementById("contactFormSection"),
    },
    "contactFormSection",
    cb
  )
}
