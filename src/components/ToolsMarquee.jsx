import React from "react"

const TOOLS = [
  'TheraOffice', 'Acuity Scheduling', 'Quo VoIP', 'Stax Payments', 'Slice Payments',
  'Google Workspace', 'Microsoft 365', 'Zoom', 'Slack', 'Google Docs',
  'Google Sheets', 'Excel', 'Shopify', 'Gorgias', 'Facebook Business Suite',
  'TikTok Seller Center', 'TikTok Live', 'Meta Business Suite', 'Salesforce',
  'HubSpot', 'ClickUp', 'Practice Better', 'Zendesk', 'Freshdesk',
  'Google Meet', 'Microsoft Teams', 'WhatsApp', 'Telegram', 'Discord',
  'Trello', 'Asana', 'Monday.com', 'Notion', 'Loom', 'Scribe',
  'Make.com', 'Zapier', 'ChatGPT', 'Claude', 'Gemini', 'Avaya',
  'Cisco Finesse', 'Salesforce Service Cloud', 'HIPAA-Compliance Systems'
]

const FEEDBACK = [
  "★★★★★ 'Had a great Customer Service Experience with JOHN... resolved it within minutes.' — David Sellers",
  "★★★★★ 'Incredibly professional, empathetic, and efficient with scheduling.' — Tim Beglin",
  "★★★★★ 'Getting good feedback from patients.' — Dr. Ryan",
  "★★★★★ 'Always responsive and highly organized.' — Jeff Jean-Philippe",
  "★★★★★ 'Excellent system optimization and execution.' — Uche Olomina",
  "★★★★★ 'Exceptional support, zero stress.' — Maegan Welsh",
  "★★★★★ 'Superb workflow architecture.' — Robert Bailey",
  "★★★★★ 'Outstanding service and tracking support.' — Beth Macpherson"
]

const getIcon = (tool) => {
  const icons = {
    'TheraOffice': '🏥', 'Acuity Scheduling': '📅', 'Quo VoIP': '📞',
    'Stax Payments': '💳', 'Slice Payments': '💰',
    'Google Workspace': '☁️', 'Microsoft 365': '🏢', 'Zoom': '📹',
    'Slack': '💬', 'Google Docs': '📄', 'Google Sheets': '📊',
    'Excel': '🔢', 'Shopify': '🛍️', 'Gorgias': '🎧',
    'Facebook Business Suite': '👤', 'TikTok Seller Center': '🎵',
    'TikTok Live': '⚡', 'Meta Business Suite': '📱', 'Salesforce': '☁️',
    'HubSpot': '🎯', 'ClickUp': '✅', 'Practice Better': '🩺',
    'Zendesk': '🎫', 'Freshdesk': '📦', 'Google Meet': '🎥',
    'Microsoft Teams': '👥', 'WhatsApp': '💬', 'Telegram': '✈️',
    'Discord': '🎮', 'Trello': '📋', 'Asana': '🚀',
    'Monday.com': '📈', 'Notion': '📝', 'Loom': '🎥',
    'Scribe': '✍️', 'Make.com': '⚙️', 'Zapier': '⚡',
    'ChatGPT': '🤖', 'Claude': '🧠', 'Gemini': '✨',
    'Avaya': '☎️', 'Cisco Finesse': '🖥️',
    'Salesforce Service Cloud': '☁️',
    'HIPAA-Compliance Systems': '🔒'
  }

  return icons[tool] || '🔹'
}

export default function ToolsMarquee() {
  return (
    <section className="marquee-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          TECH STACK & OPERATIONAL PERFORMANCE
        </h2>
      </div>

      {/* LEFT TO RIGHT */}
      <div className="mqwrap">
        <div className="mqtrack-ltr">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={i} className="mpill">
              <span className="pill-icon">{getIcon(tool)}</span> {tool}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT TO LEFT (FEEDBACK) */}
      <div className="mqwrap">
        <div className="mqtrack-rtl">
          {[...FEEDBACK, ...FEEDBACK].map((f, i) => (
            <span key={i} className="fpill">{f}</span>
          ))}
        </div>
      </div>
    </section>
  )
}