export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Sideo AI (“we”, “our”, “the Service”) is committed to protecting your
          privacy. This Privacy Policy explains how we handle data when you use
          our website, browser extension, and related services.
        </p>

        <h2 className="text-2xl font-semibold">2. Information We Do Not Collect</h2>
        <p>
          We do <strong>not</strong> collect, store, or sell any of the following:
        </p>
        <ul className="list-disc pl-6">
          <li>Personal identity information</li>
          <li>Browsing history</li>
          <li>Passwords or authentication data</li>
          <li>Credit card or payment information</li>
          <li>Any content you view or generate in your browser</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Information We May Process</h2>
        <p>
          To provide AI features, we may temporarily process the text you
          explicitly submit to the extension or website. This data is:
        </p>
        <ul className="list-disc pl-6">
          <li>Used only to generate responses</li>
          <li>Not stored on our servers</li>
          <li>Not used for training</li>
          <li>Not shared with third parties</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Third‑Party Services</h2>
        <p>
          Sideo AI may integrate with third‑party AI APIs (e.g., OpenAI,
          Anthropic). Your submitted text may be sent to these providers solely
          for generating responses. These providers do not receive any personal
          identifying information from us.
        </p>

        <h2 className="text-2xl font-semibold">5. Cookies</h2>
        <p>
          Our website may use minimal cookies for authentication or analytics.
          We do not use cookies for advertising or tracking.
        </p>

        <h2 className="text-2xl font-semibold">6. Data Security</h2>
        <p>
          We use industry‑standard security practices to protect all processed
          data. We do not store sensitive information.
        </p>

        <h2 className="text-2xl font-semibold">7. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at:
          <br />
          <strong>support@sideo.ai</strong>
        </p>
      </section>

      <hr className="my-12" />

      <h1 className="text-4xl font-bold mb-6">隐私政策（中文）</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. 简介</h2>
        <p>
          Sideo AI（“我们”）致力于保护您的隐私。本隐私政策说明您在使用我们的网站、
          浏览器插件及相关服务时，我们如何处理数据。
        </p>

        <h2 className="text-2xl font-semibold">2. 我们不会收集的信息</h2>
        <p>我们<strong>不会</strong>收集、存储或出售以下信息：</p>
        <ul className="list-disc pl-6">
          <li>个人身份信息</li>
          <li>浏览历史</li>
          <li>密码或认证数据</li>
          <li>支付或信用卡信息</li>
          <li>您在浏览器中查看或生成的内容</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. 我们可能处理的信息</h2>
        <p>
          为提供 AI 功能，我们可能会临时处理您主动提交的文本。这些数据：
        </p>
        <ul className="list-disc pl-6">
          <li>仅用于生成 AI 回复</li>
          <li>不会存储在我们的服务器上</li>
          <li>不会用于模型训练</li>
          <li>不会与第三方共享</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. 第三方服务</h2>
        <p>
          Sideo AI 可能会调用第三方 AI API（如 OpenAI、Anthropic）。您提交的文本仅用于生成回复，
          不会包含任何可识别个人身份的信息。
        </p>

        <h2 className="text-2xl font-semibold">5. Cookies</h2>
        <p>
          我们的网站可能使用少量 Cookies 用于登录或基础分析，不用于广告或跟踪。
        </p>

        <h2 className="text-2xl font-semibold">6. 数据安全</h2>
        <p>我们采用行业标准的安全措施保护所有处理的数据，不存储敏感信息。</p>

        <h2 className="text-2xl font-semibold">7. 联系方式</h2>
        <p>
          如有任何问题，请联系：
          <br />
          <strong>support@sideo.ai</strong>
        </p>
      </section>
    </main>
  );
}
