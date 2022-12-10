//DEVTOOLS

{//KONSOL

  {//Konsol Mesaj Tipleri
    
    //kayit mesaj tipi
    console.log();
    console.debug();
    console.info();

    //dikkat mesaj tipi
    console.warn();

    //hata mesaj tipi
    console.error();
  }
  {//Tablo Mesajlar
    
    //tablo mesaj tipi
    console.table();
  }

  {//Nesne Ozelliklerinin Yazdirilmasi
   
    //console.dir(window.location);
  }

  {//Mesaj Stilleri (CSS)
     
    console.log(
      "%cJava%cScript",
      "color:white;background-color:red; font-size:20px",
      "color:red;background-color:white;font-size:20px"
    );
  }

  {//Konsol Temizleme
    console.clear();
  }
  
  {//Hafiza Kontrolu
    console.memory;
  }
}
{//SOURCES
  /**sayfa acikken kullanilan, dosyalari ve 
   * komut dosyalari listeler. debug islemi burada yapilir.*/
  {//Debug Komutu
    /**Bu komutu gerekli kod bloglari arasina
     * koyabiliriz.
     */
    debugger;
  }
}
{//PERFORMANS
  /**devtools icerisinde, yazilan js kodlarinin performansi
   * izlenebilmektedir. Hatta yazilan kodun dusuk sistemlerde 
   * test edilmesi icin, ayarlamalar yapilabilmektedir. 
   */
}
{//NETWORK
  /**Sayfaya yuklenilen, png,jpeg,css,html,js, video
   * gibi dosyalari veya web servislerinin http status kodlarini
   * icermektedir. Web servisi veya ilgili sayfanin, header, request,
   * response verilerini de gostermektedir.
   */

}