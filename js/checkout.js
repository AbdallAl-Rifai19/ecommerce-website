document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contact");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // يمنع الإرسال العادي

    Swal.fire({
      icon: 'success',
      title: 'تم تأكيد الطلب!',
      text: 'شكرًا لك، سيتم التواصل معك قريبًا.',
      confirmButtonText: 'حسناً'
    }).then((result) => {
      if (result.isConfirmed) {
        // بعد الضغط على "موافق" ينتقل إلى صفحة index.html
        window.location.href = "index.html";
      }
    });

    form.reset(); // تفريغ البيانات بعد الإرسال (اختياري)
  });
});
