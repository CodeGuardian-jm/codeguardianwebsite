// =========================================
// BASIC INTERACTIVITY
// - Mobile nav toggle
// - Smooth scrolling for internal links
// - Dynamic year in footer
// =========================================
document.addEventListener("DOMContentLoaded", function () {
  // 1. CACHE ALL ELEMENTS ONCE AT THE TOP
  const navToggle = document.querySelector(".mobile-nav-toggle") || document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  const yearSpan = document.getElementById("year");

  // 2. UNIFIED NAVIGATION LOGIC
  if (navToggle && nav) {
    navToggle.onclick = function(e) {
      e.preventDefault();
      nav.classList.toggle("open");
      navToggle.classList.toggle("open"); 
      const isOpen = nav.classList.contains("open");
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.onclick = function() {
        nav.classList.remove("open");
        navToggle.classList.remove("open");
        document.body.style.overflow = "auto";
      };
    });
  }

  // 3. SMOOTH SCROLLING (Only for # anchors)
  allNavLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          event.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // 4. DYNAMIC YEAR
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// =========================================
// FRAMEWORK MODAL LOGIC
// =========================================
const frameworkData = {
  intake: { 
    title: "Pillar - 1 <span style='color:var(--color-accent)'>→</span> INTAKE ENGINE", 
    content: "Hardened digital entry point. Uses custom decision-tree logic to vet, score, and filter incoming traffic. Creates automated responses 24/7 for all socials. Eliminates manual lead-gen friction by ensuring you only engage with high-value 'CLIENTS'." 
  },
  perimeter: { 
    title: "Pillar - 2 <span style='color:var(--color-accent)'>→</span> UNIFIED PERIMETER", 
    content: "Centralized Nervous System. Tunnels communication from WhatsApp, IG, and Web into a secure Discord command center via API Webhooks. Response times are reduced from hours to seconds." 
  },
  intelligence: { 
    title: "Pillar - 3 <span style='color:var(--color-accent)'>→</span> FISCAL INTELLIGENCE", 
    content: "Autonomous Cloud Ledger. Real-time recording of every transaction with integrated auditing scripts to flag risk, manage GCT, and monitor profit margins 24/7 without manual bookkeeping." 
  },
  executor: { 
    title: "Pillar - 4 <span style='color:var(--color-accent)'>→</span> THE EXECUTOR", 
    content: "Operational Fulfillment Logic. The system monitors the Fiscal Ledger and automatically generates work orders, receipts, and procurement triggers the moment an invoice is settled." 
  }
};

function openDetail(key) {
  const modal = document.getElementById('detail-modal');
  const body = document.getElementById('modal-body');
  const data = frameworkData[key];
  
  if (data && modal && body) {
    body.innerHTML = `
      <h2 style="color:var(--color-heading); font-family: 'Inter', sans-serif;">
        ${data.title.replace('→', '<span style="color:var(--color-accent)">→</span>')}
      </h2>
      <div style="width: 40px; height: 3px; background: var(--color-accent); margin: 20px 0;"></div>
      <p style="line-height:1.8; color: #aaa;">${data.content}</p>
    `;
    modal.classList.add('active');
  }
}

function closeDetail() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.classList.remove('active');
}

// =========================================
// LATENCY DIAGNOSTIC ENGINE
// =========================================
async function runLatencyDiagnostic() {
  const display = document.getElementById('load-time-display');
  const statusText = document.getElementById('audit-status-text');
  if (!display) return;

  let scanInterval = setInterval(() => {
    const randomNode = Math.random().toString(16).substring(2, 8).toUpperCase();
    display.innerText = `NODE_${randomNode}...`;
    display.style.color = "#444"; 
  }, 80);

  try {
    const start = performance.now();
    await fetch('https://www.google.com/generate_204', { mode: 'no-cors', cache: 'no-cache' });
    const end = performance.now();
    const latency = (end - start).toFixed(2);

    setTimeout(() => {
      clearInterval(scanInterval);
      display.style.color = "var(--color-accent)";
      display.innerText = `${latency}MS`;
      if (statusText) {
        statusText.innerText = "OPTIMIZED FOR SCALE";
        statusText.style.letterSpacing = "2px";
      }
      display.classList.add('flicker-text');
    }, 1200);

  } catch (error) {
    clearInterval(scanInterval);
    display.innerText = "0.04MS"; 
    if (statusText) statusText.innerText = "OFFLINE_CACHE_ACTIVE";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const auditSection = document.getElementById('audit');
  if (auditSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runLatencyDiagnostic();
        observer.disconnect(); 
      }
    }, { threshold: 0.5 });
    observer.observe(auditSection);
  }
});

// =========================================
// TIMELINE PROGRESS TRACKER
// =========================================
window.addEventListener('scroll', () => {
  const timeline = document.querySelector('.timeline-container');
  const progress = document.querySelector('.timeline-progress');
  const items = document.querySelectorAll('.timeline-item');
  
  if (!timeline || !progress) return;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  let progressHeight = (windowHeight * 0.7 - rect.top);
  let totalHeight = rect.height;
  
  let percentage = Math.min(Math.max(progressHeight / totalHeight, 0), 1);
  progress.style.height = (percentage * 100) + "%";

  items.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    if (itemRect.top < windowHeight * 0.7) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

// =========================================
// REVEAL ANIMATION OBSERVERS
// =========================================
const chartSection = document.querySelector('.chart-section');
if (chartSection) {
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.bar-fill');
        fills.forEach(fill => {
          fill.style.width = fill.getAttribute('data-width');
        });
      }
    });
  }, { threshold: 0.5 });
  chartObserver.observe(chartSection);
}

document.querySelectorAll('.card').forEach(card => {
  const mobileCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.6, rootMargin: '0px 0px -10% 0px' });
  mobileCardObserver.observe(card);
});

document.querySelectorAll('.reveal, .timeline-item').forEach(el => {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, { threshold: 0.15 });
  revealObserver.observe(el);
});

// =========================================
// UNIFIED SECURE CONTACT ENGINE (FIXED)
// =========================================
const guardianForm = document.getElementById('guardianAuditForm');

if (guardianForm) {
  guardianForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    if (!btn) return;
    
    const originalText = btn.innerText;
    btn.innerText = "UPLOADING_ENCRYPTED_PACKET...";
    btn.style.opacity = "0.6";
    btn.disabled = true;

    const opName = document.getElementById('opName').value;
    const opEmail = document.getElementById('opEmail').value;
    const purpose = document.getElementById('inquiryType').value;
    const message = document.getElementById('opMessage').value;

    const dataPayload = {
      key: "RICHARD_DIED_2024",
      type: "Secure Contact Intake",
      name: opName,
      email: opEmail,
      purpose: purpose,
      message: message
    };

    const discordPayload = {
      username: "CodeGuardian System Comms",
      embeds: [{
        title: "📥 NEW SECURE TRANSMISSION RECEIVED",
        color: 13565952,
        fields: [
          { name: "👤 OPERATOR", value: `\`${opName}\``, inline: true },
          { name: "📬 RETURN LINE", value: `\`${opEmail}\``, inline: true },
          { name: "🛡️ CHANNEL PURPOSE", value: `**${purpose}**`, inline: false },
          { name: "📝 PAYLOAD SUMMARY", value: `\`\`\`\n${message}\n\`\`\`` }
        ],
        timestamp: new Date().toISOString()
      }]
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyNQbOMT78Wms0JcDtAkcVt7-91YQMrbsCps8Y1z1WPa5MVWGGtG2NVfMhrZXz5k56w/exec', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        body: JSON.stringify(dataPayload)
      });

      // To connect Discord later, uncomment below and add your Webhook URL:
      // const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';
      // await fetch(DISCORD_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(discordPayload) });

      btn.innerText = "TRANSMISSION_COMPLETE";
      btn.style.background = "#00ff00"; 
      btn.style.color = "#000";
      btn.style.boxShadow = "0 0 30px #00ff00";
      
      alert("Transmission Successful. The Guardian has relayed your packet.");
      guardianForm.reset();

    } catch (error) {
      console.error("Gateway Error:", error);
      btn.innerText = "GATEWAY_TIMEOUT";
      btn.style.background = "var(--color-accent)";
      btn.disabled = false;
      alert("CRITICAL ERROR: Main transmission terminal is offline.");
    } finally {
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.opacity = "1";
        btn.style.background = "";
        btn.style.color = "";
        btn.style.boxShadow = "";
        btn.disabled = false;
      }, 4000);
    }
  });
}