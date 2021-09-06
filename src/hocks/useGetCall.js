const useGetCall = () => {
  const openWidget = () => {
    const bingcPhoneButton = document.getElementById('bingc-phone-button');

    bingcPhoneButton?.click();
  };

  return { openWidget };
};

export default useGetCall;
