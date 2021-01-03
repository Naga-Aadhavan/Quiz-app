from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep, ctime

#driver = webdriver.Firefox()
driver= webdriver.Firefox(executable_path=r'C:\geckodriver.exe')
driver.get("http://localhost:4200/result")
driver.find_element_by_name("Name").send_keys("Test")
sleep(1)
driver.find_element_by_name("buttonselect").click()
sleep(1)
for x in range(15):
    driver.find_element_by_name("button1").click()
    sleep(1)
    driver.find_element_by_name("next").click()
    sleep(1)
print(driver.title)
#driver.close()
#input-field col s12