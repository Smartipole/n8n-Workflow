function pingN8N() {
  // Render URL ของคุณ
  const N8N_URL = 'https://n8n-line-bot.onrender.com';
  
  try {
    const response = UrlFetchApp.fetch(N8N_URL, {
      method: 'GET',
      muteHttpExceptions: true
    });
    
    const statusCode = response.getResponseCode();
    
    if (statusCode === 200 || statusCode === 302) {
      Logger.log('✅ n8n is alive! Status: ' + statusCode);
    } else {
      Logger.log('⚠️ n8n responded but unusual status: ' + statusCode);
    }
    
  } catch (error) {
    Logger.log('❌ Failed to ping n8n: ' + error.message);
  }
}

// ฟังก์ชันทดสอบ (Run manually)
function testPing() {
  pingN8N();
}
