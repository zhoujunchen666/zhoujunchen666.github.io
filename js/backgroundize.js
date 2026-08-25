// ���ֻ�����ʾ�ı���ͼƬ����
const mobileBgImageUrl = "url('https://cdn.luogu.com.cn/upload/image_hosting/gpua9m0b.png')";

// �ڵ��Զ���ʾ�ı���ͼƬ����
const desktopBgImageUrl = "url('https://cdn.luogu.com.cn/upload/image_hosting/gpua9m0b.png')";

// ���ֻ������ñ���ͼƬ
if (window.innerWidth < 768) {
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
} else {
  // �ڵ��Զ����ñ���ͼƬ
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
}

// ����banner�ı���ͼƬΪ��
document.querySelector("#banner").setAttribute('style', 'background-image: none');

// ����banner��.mask������ɫ͸��
document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');