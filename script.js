const menuBtn=document.getElementById('menuBtn'), navMenu=document.getElementById('navMenu');
    menuBtn.addEventListener('click',()=>navMenu.classList.toggle('active'));
    document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('active')));
    document.getElementById('bookingForm').addEventListener('submit',function(e){
      e.preventDefault();
      const data={name:document.getElementById('name').value,phone:document.getElementById('phone').value,eventType:document.getElementById('eventType').value,eventDate:document.getElementById('eventDate').value,guests:document.getElementById('guests').value,message:document.getElementById('message').value};
      const txt=`Hello Parinay Watika, I want to enquire about booking.%0AName: ${data.name}%0APhone: ${data.phone}%0AEvent: ${data.eventType}%0ADate: ${data.eventDate}%0AGuests: ${data.guests}%0AMessage: ${data.message}`;
      window.open('https://wa.me/918603371910?text='+txt,'_blank');
    });