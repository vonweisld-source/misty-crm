import React, { useState, useEffect, useRef } from 'react';
import { Home, Store, Package, FileText, Plus, Search, Trash2, Edit3, X, Download, ChevronRight, TrendingUp, Phone, Mail, MapPin, Printer, ShoppingCart, Truck, Upload, FileSpreadsheet, Copy, ExternalLink } from 'lucide-react';

// ============== MISTY BLOOMS LOGO (SVG - recreated from original) ==============
// Original was a cream rectangle with elegant serif "Misty Blooms" + "Florist" + decorative flowers
// This SVG recreates that aesthetic with vector graphics — scales perfectly, tiny file size
const MistyBloomsLogo = ({ size = 200, variant = 'full' }) => {
  // variant: 'full' (with background), 'mark' (no background), 'compact' (smaller)
  const showBg = variant === 'full';
  return (
    <svg viewBox="0 0 400 280" style={{ width: size, height: 'auto', display: 'block' }} xmlns="http://www.w3.org/2000/svg">
      {showBg && <rect width="400" height="280" fill="#F5EFE6" />}

      {/* Top decorative ornament — small flowers and curves */}
      <g transform="translate(200, 50)" opacity="0.85">
        {/* Center flower */}
        <g>
          <circle cx="0" cy="0" r="4" fill="#3D3B4A" opacity="0.6" />
          <ellipse cx="0" cy="-6" rx="3" ry="5" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.6" />
          <ellipse cx="5.2" cy="-3" rx="3" ry="5" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.6" transform="rotate(60 5.2 -3)" />
          <ellipse cx="5.2" cy="3" rx="3" ry="5" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.6" transform="rotate(120 5.2 3)" />
          <ellipse cx="0" cy="6" rx="3" ry="5" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.6" />
          <ellipse cx="-5.2" cy="3" rx="3" ry="5" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.6" transform="rotate(60 -5.2 3)" />
          <ellipse cx="-5.2" cy="-3" rx="3" ry="5" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.6" transform="rotate(120 -5.2 -3)" />
        </g>
        {/* Left flourish */}
        <path d="M -15 0 Q -30 -5, -45 0 Q -55 3, -60 0" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.5" strokeLinecap="round" />
        <circle cx="-50" cy="-2" r="1.5" fill="#3D3B4A" opacity="0.5" />
        <circle cx="-58" cy="1" r="1" fill="#3D3B4A" opacity="0.5" />
        {/* Right flourish */}
        <path d="M 15 0 Q 30 -5, 45 0 Q 55 3, 60 0" fill="none" stroke="#3D3B4A" strokeWidth="0.8" opacity="0.5" strokeLinecap="round" />
        <circle cx="50" cy="-2" r="1.5" fill="#3D3B4A" opacity="0.5" />
        <circle cx="58" cy="1" r="1" fill="#3D3B4A" opacity="0.5" />
      </g>

      {/* Main wordmark - "Misty Blooms" in elegant serif italic */}
      <text x="200" y="135"
        textAnchor="middle"
        fontFamily="Georgia, 'Playfair Display', 'Times New Roman', serif"
        fontSize="54"
        fontStyle="italic"
        fontWeight="400"
        fill="#3D3B4A"
        letterSpacing="1">Misty Blooms</text>

      {/* Decorative line + ornament beneath wordmark */}
      <g transform="translate(200, 160)">
        <line x1="-80" y1="0" x2="-15" y2="0" stroke="#3D3B4A" strokeWidth="0.6" opacity="0.7" />
        <line x1="15" y1="0" x2="80" y2="0" stroke="#3D3B4A" strokeWidth="0.6" opacity="0.7" />
        {/* tiny flower in middle */}
        <g opacity="0.75">
          <circle cx="0" cy="0" r="2" fill="#3D3B4A" />
          <ellipse cx="0" cy="-4" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" strokeWidth="0.6" />
          <ellipse cx="3.5" cy="-2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" strokeWidth="0.6" transform="rotate(60 3.5 -2)" />
          <ellipse cx="3.5" cy="2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" strokeWidth="0.6" transform="rotate(120 3.5 2)" />
          <ellipse cx="0" cy="4" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" strokeWidth="0.6" />
          <ellipse cx="-3.5" cy="2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" strokeWidth="0.6" transform="rotate(60 -3.5 2)" />
          <ellipse cx="-3.5" cy="-2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" strokeWidth="0.6" transform="rotate(120 -3.5 -2)" />
        </g>
      </g>

      {/* "Florist" subtitle */}
      <text x="200" y="195"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontStyle="italic"
        fontWeight="400"
        fill="#3D3B4A"
        letterSpacing="6"
        opacity="0.85">Florist</text>

      {/* Bottom decorative flourish - botanical sprig */}
      <g transform="translate(200, 235)" opacity="0.7">
        {/* Center stem */}
        <path d="M 0 -8 Q 0 0, 0 8" stroke="#3D3B4A" strokeWidth="0.8" fill="none" />
        {/* Left leaves */}
        <path d="M 0 -4 Q -8 -6, -14 -3" stroke="#3D3B4A" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <ellipse cx="-12" cy="-3" rx="4" ry="2" fill="#3D3B4A" opacity="0.3" transform="rotate(-25 -12 -3)" />
        <path d="M 0 2 Q -10 0, -18 3" stroke="#3D3B4A" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <ellipse cx="-15" cy="3" rx="5" ry="2.2" fill="#3D3B4A" opacity="0.3" transform="rotate(-15 -15 3)" />
        {/* Right leaves */}
        <path d="M 0 -4 Q 8 -6, 14 -3" stroke="#3D3B4A" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <ellipse cx="12" cy="-3" rx="4" ry="2" fill="#3D3B4A" opacity="0.3" transform="rotate(25 12 -3)" />
        <path d="M 0 2 Q 10 0, 18 3" stroke="#3D3B4A" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <ellipse cx="15" cy="3" rx="5" ry="2.2" fill="#3D3B4A" opacity="0.3" transform="rotate(15 15 3)" />
        {/* Small flower at top */}
        <circle cx="0" cy="-10" r="2" fill="#3D3B4A" opacity="0.6" />
        <circle cx="0" cy="-10" r="1" fill="#F5EFE6" />
      </g>
    </svg>
  );
};

// SVG logo as a string for use in print HTML (will be embedded inline)
const LOGO_SVG_STRING = `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect width="400" height="280" fill="#F5EFE6"/>
  <g transform="translate(200, 50)" opacity="0.85">
    <g>
      <circle cx="0" cy="0" r="4" fill="#3D3B4A" opacity="0.6"/>
      <ellipse cx="0" cy="-6" rx="3" ry="5" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.6"/>
      <ellipse cx="5.2" cy="-3" rx="3" ry="5" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.6" transform="rotate(60 5.2 -3)"/>
      <ellipse cx="5.2" cy="3" rx="3" ry="5" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.6" transform="rotate(120 5.2 3)"/>
      <ellipse cx="0" cy="6" rx="3" ry="5" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.6"/>
      <ellipse cx="-5.2" cy="3" rx="3" ry="5" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.6" transform="rotate(60 -5.2 3)"/>
      <ellipse cx="-5.2" cy="-3" rx="3" ry="5" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.6" transform="rotate(120 -5.2 -3)"/>
    </g>
    <path d="M -15 0 Q -30 -5, -45 0 Q -55 3, -60 0" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.5" stroke-linecap="round"/>
    <circle cx="-50" cy="-2" r="1.5" fill="#3D3B4A" opacity="0.5"/>
    <circle cx="-58" cy="1" r="1" fill="#3D3B4A" opacity="0.5"/>
    <path d="M 15 0 Q 30 -5, 45 0 Q 55 3, 60 0" fill="none" stroke="#3D3B4A" stroke-width="0.8" opacity="0.5" stroke-linecap="round"/>
    <circle cx="50" cy="-2" r="1.5" fill="#3D3B4A" opacity="0.5"/>
    <circle cx="58" cy="1" r="1" fill="#3D3B4A" opacity="0.5"/>
  </g>
  <text x="200" y="135" text-anchor="middle" font-family="Georgia, 'Playfair Display', serif" font-size="54" font-style="italic" font-weight="400" fill="#3D3B4A" letter-spacing="1">Misty Blooms</text>
  <g transform="translate(200, 160)">
    <line x1="-80" y1="0" x2="-15" y2="0" stroke="#3D3B4A" stroke-width="0.6" opacity="0.7"/>
    <line x1="15" y1="0" x2="80" y2="0" stroke="#3D3B4A" stroke-width="0.6" opacity="0.7"/>
    <g opacity="0.75">
      <circle cx="0" cy="0" r="2" fill="#3D3B4A"/>
      <ellipse cx="0" cy="-4" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" stroke-width="0.6"/>
      <ellipse cx="3.5" cy="-2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" stroke-width="0.6" transform="rotate(60 3.5 -2)"/>
      <ellipse cx="3.5" cy="2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" stroke-width="0.6" transform="rotate(120 3.5 2)"/>
      <ellipse cx="0" cy="4" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" stroke-width="0.6"/>
      <ellipse cx="-3.5" cy="2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" stroke-width="0.6" transform="rotate(60 -3.5 2)"/>
      <ellipse cx="-3.5" cy="-2" rx="2" ry="3.5" fill="none" stroke="#3D3B4A" stroke-width="0.6" transform="rotate(120 -3.5 -2)"/>
    </g>
  </g>
  <text x="200" y="195" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-style="italic" font-weight="400" fill="#3D3B4A" letter-spacing="6" opacity="0.85">Florist</text>
  <g transform="translate(200, 235)" opacity="0.7">
    <path d="M 0 -8 Q 0 0, 0 8" stroke="#3D3B4A" stroke-width="0.8" fill="none"/>
    <path d="M 0 -4 Q -8 -6, -14 -3" stroke="#3D3B4A" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <ellipse cx="-12" cy="-3" rx="4" ry="2" fill="#3D3B4A" opacity="0.3" transform="rotate(-25 -12 -3)"/>
    <path d="M 0 2 Q -10 0, -18 3" stroke="#3D3B4A" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <ellipse cx="-15" cy="3" rx="5" ry="2.2" fill="#3D3B4A" opacity="0.3" transform="rotate(-15 -15 3)"/>
    <path d="M 0 -4 Q 8 -6, 14 -3" stroke="#3D3B4A" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <ellipse cx="12" cy="-3" rx="4" ry="2" fill="#3D3B4A" opacity="0.3" transform="rotate(25 12 -3)"/>
    <path d="M 0 2 Q 10 0, 18 3" stroke="#3D3B4A" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <ellipse cx="15" cy="3" rx="5" ry="2.2" fill="#3D3B4A" opacity="0.3" transform="rotate(15 15 3)"/>
    <circle cx="0" cy="-10" r="2" fill="#3D3B4A" opacity="0.6"/>
    <circle cx="0" cy="-10" r="1" fill="#F5EFE6"/>
  </g>
</svg>`;

// SVG as data URL for use in <img src=> tags (in printable HTML)
const LOGO_DATA_URL = `data:image/svg+xml;utf8,${encodeURIComponent(LOGO_SVG_STRING)}`;

// ============== APPLE-STYLE DESIGN TOKENS ==============
const T = {
  bg: '#F5EFE6',
  bgGrouped: '#EDE5D8',
  card: '#FFFFFF',
  cardElevated: '#FFFFFF',
  text: '#2C2A35',
  textSecondary: '#5C5868',
  textTertiary: '#8B8794',
  textQuaternary: '#C4C0CC',
  accent: '#3D3B4A',
  accentDeep: '#2C2A35',
  accentLight: '#F0EAE0',
  rose: '#C9A8AE',
  roseBg: '#F5E8EA',
  sage: '#9BAE8A',
  sageBg: '#E8EFE3',
  amber: '#D4A574',
  amberBg: '#F5E9D6',
  blue: '#7B95A8',
  blueBg: '#E8EEF1',
  red: '#C56B5C',
  redBg: '#F5E2DE',
  gold: '#B8956B',
  separator: 'rgba(60,55,75,0.10)',
  separatorOpaque: '#E5DDC8',
};

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';
const SERIF = 'Georgia, "Playfair Display", "Times New Roman", serif';

// ============== MAIN COMPONENT ==============

export default function MistyBloomsCRM() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [consignments, setConsignments] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [search, setSearch] = useState('');
  const [viewingInvoice, setViewingInvoice] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showReminder, setShowReminder] = useState(null);
  const [showPnL, setShowPnL] = useState(false);
  const [snapshots, setSnapshots] = useState([]);
  const [investments, setInvestments] = useState([]); // Loans from "David" + repayments to David

  // ===== Load all data on mount =====
  // ===== Dual storage layer =====
  // window.storage (Claude artifact storage) may not persist between sessions in some environments,
  // so we ALWAYS also write to localStorage as a reliable backup. On load, we merge both sources.
  const LS_PREFIX = 'mistyblooms:';

  const storageSet = async (key, value) => {
    // Always write to localStorage (synchronous, reliable)
    try { localStorage.setItem(LS_PREFIX + key, value); } catch (e) { console.warn('localStorage write failed', e); }
    // Also try window.storage if available
    try {
      if (window.storage?.set) await window.storage.set(key, value);
    } catch (e) { /* silent */ }
  };

  const storageDelete = async (key) => {
    try { localStorage.removeItem(LS_PREFIX + key); } catch (e) {}
    try {
      if (window.storage?.delete) await window.storage.delete(key);
    } catch (e) {}
  };

  const storageList = async (prefix) => {
    const found = new Map(); // key -> value (string)
    // Read localStorage first
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(LS_PREFIX + prefix)) {
          const realKey = k.slice(LS_PREFIX.length);
          found.set(realKey, localStorage.getItem(k));
        }
      }
    } catch (e) { console.warn('localStorage list failed', e); }
    // Merge with window.storage (window.storage wins for items with later updatedAt)
    try {
      if (window.storage?.list) {
        const res = await window.storage.list(prefix);
        const keys = res?.keys || [];
        for (const k of keys) {
          try {
            const r = await window.storage.get(k);
            if (r?.value) {
              const existing = found.get(k);
              if (!existing) {
                found.set(k, r.value);
              } else {
                // Both have it — pick the one with later updatedAt
                try {
                  const a = JSON.parse(existing);
                  const b = JSON.parse(r.value);
                  if (new Date(b.updatedAt || b.takenAt || 0) > new Date(a.updatedAt || a.takenAt || 0)) {
                    found.set(k, r.value);
                  }
                } catch {}
              }
            }
          } catch {}
        }
      }
    } catch (e) {}
    return Array.from(found.values()).map(v => {
      try { return JSON.parse(v); } catch { return null; }
    }).filter(Boolean);
  };

  const storageGet = async (key) => {
    // Try localStorage first
    try {
      const v = localStorage.getItem(LS_PREFIX + key);
      if (v) return { key, value: v };
    } catch {}
    try {
      if (window.storage?.get) return await window.storage.get(key);
    } catch {}
    return null;
  };

  useEffect(() => {
    const load = async () => {
      let [s, p, c, sup, pur, snaps, inv] = await Promise.all([
        storageList('shop:'),
        storageList('product:'),
        storageList('consign:'),
        storageList('supplier:'),
        storageList('purchase:'),
        storageList('snapshot:'),
        storageList('investment:'),
      ]);

      // First-time seed — only if NOTHING exists at all
      const seedDone = await storageGet('meta:seeded');

      if (!seedDone && s.length === 0 && p.length === 0) {
        const now = new Date().toISOString();
        const baseId = Date.now();
        const defaultShops = [
          { id: `shop_${baseId}_a1`, name: 'Shefa Mehadrin', contactName: 'Mendel', email: 'Mendel@kingskosher.com', phone: '', address: '49-53 Bury New Rd\nPrestwich\nManchester\nM25 9JY', commissionRate: '20', notes: '', createdAt: now, updatedAt: now },
          { id: `shop_${baseId}_a2`, name: 'K Outlet', contactName: '', email: '', phone: '', address: '6-9, Park Hill\nBury Old Rd\nPrestwich\nManchester\nM25 0FX', commissionRate: '20', notes: '', createdAt: now, updatedAt: now },
        ];
        const defaultProducts = [
          { id: `product_${baseId}_b1`, name: 'Roses Mix', unit: 'bouquet', stock: '0', cost: '', price: '', notes: 'Mixed colour roses bouquet', createdAt: now, updatedAt: now },
          { id: `product_${baseId}_b2`, name: 'Roses Mix', unit: 'stem', stock: '0', cost: '', price: '', notes: 'Mixed colour roses, by the stem', createdAt: now, updatedAt: now },
          { id: `product_${baseId}_b3`, name: 'Hydrangeas', unit: 'stem', stock: '0', cost: '', price: '', notes: '', createdAt: now, updatedAt: now },
          { id: `product_${baseId}_b4`, name: 'Peonies', unit: 'stem', stock: '0', cost: '', price: '', notes: '', createdAt: now, updatedAt: now },
        ];
        for (const shop of defaultShops) await storageSet(`shop:${shop.id}`, JSON.stringify(shop));
        for (const prod of defaultProducts) await storageSet(`product:${prod.id}`, JSON.stringify(prod));
        await storageSet('meta:seeded', JSON.stringify({ at: now }));
        s = defaultShops; p = defaultProducts;
      }

      setShops(s);
      setProducts(p);
      setConsignments(c);
      setSuppliers(sup);
      setPurchases(pur);
      setSnapshots((snaps || []).sort((a, b) => new Date(b.takenAt) - new Date(a.takenAt)));
      setInvestments((inv || []).sort((a, b) => new Date(b.date) - new Date(a.date)));
      setLoading(false);
    };
    load();
  }, []);

  // ===== Save / Delete =====
  // Toast notification queue for visual save confirmation
  const [toast, setToast] = useState(null); // { type: 'success'|'error'|'warning', msg: string }
  const showToast = (type, msg, duration = 3000) => {
    setToast({ type, msg, id: Date.now() });
    setTimeout(() => setToast(t => (t && t.id && Date.now() - t.id >= duration ? null : t)), duration);
  };

  // Verify an item was actually saved to localStorage
  const verifySaved = (type, id) => {
    try {
      const v = localStorage.getItem(LS_PREFIX + `${type}:${id}`);
      return !!v;
    } catch { return false; }
  };

  const saveItem = async (type, data, setter) => {
    const item = {
      ...data,
      id: data.id || `${type}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // CRITICAL: persist FIRST (synchronous localStorage), then update UI
    // This way if anything goes wrong, the data is already safe
    let saveOk = false;
    try {
      localStorage.setItem(LS_PREFIX + `${type}:${item.id}`, JSON.stringify(item));
      saveOk = true;
    } catch (e) {
      console.error('localStorage save FAILED:', e);
    }

    // Also fire-and-forget to window.storage (slower, async)
    try {
      if (window.storage?.set) window.storage.set(`${type}:${item.id}`, JSON.stringify(item));
    } catch (e) { /* silent */ }

    if (!saveOk) {
      showToast('error', '⚠️ Save failed! Try again or back up immediately!', 8000);
      return null;
    }

    // Now update React state
    setter(prev => {
      const exists = prev.find(p => p.id === item.id);
      return exists ? prev.map(p => p.id === item.id ? item : p) : [...prev, item];
    });

    // Auto-deduct stock on consignment changes
    if (type === 'consign' && Array.isArray(item.items)) {
      const previousInvoice = consignments.find(c => c.id === item.id);
      const previousItems = previousInvoice?.items || [];
      const stockChanges = {};
      item.items.forEach(it => {
        if (!it.productId) return;
        const prevIt = previousItems.find(p => p.id === it.id);
        const prevQty = parseInt(prevIt?.qty) || 0;
        const newQty = parseInt(it.qty) || 0;
        const delta = newQty - prevQty;
        if (delta !== 0) stockChanges[it.productId] = (stockChanges[it.productId] || 0) + delta;
      });
      previousItems.forEach(prevIt => {
        if (!prevIt.productId) return;
        if (!item.items.find(i => i.id === prevIt.id)) {
          stockChanges[prevIt.productId] = (stockChanges[prevIt.productId] || 0) - (parseInt(prevIt.qty) || 0);
        }
      });
      if (Object.keys(stockChanges).length > 0) {
        setProducts(prev => prev.map(p => {
          if (stockChanges[p.id]) {
            const newStock = Math.max(0, (parseInt(p.stock) || 0) - stockChanges[p.id]);
            const updated = { ...p, stock: String(newStock), updatedAt: new Date().toISOString() };
            storageSet(`product:${p.id}`, JSON.stringify(updated));
            return updated;
          }
          return p;
        }));
      }
    }

    setShowForm(null);
    setEditingItem(null);

    // VERIFY: confirm it's really there
    if (verifySaved(type, item.id)) {
      const labels = { shop: 'Shop', product: 'Stock item', consign: 'Invoice', supplier: 'Supplier', purchase: 'Purchase' };
      showToast('success', `✓ ${labels[type] || 'Item'} saved`);
      // Update last-known counts for the "data shrinkage" warning
      updateDataFingerprint();
    } else {
      showToast('error', '⚠️ Save did NOT persist! Back up immediately.', 10000);
    }

    return item;
  };

  const deleteItem = async (type, id, skipConfirm = false) => {
    if (!skipConfirm && !confirm('Delete this? This cannot be undone.')) return;
    const setters = { shop: setShops, product: setProducts, consign: setConsignments, supplier: setSuppliers, purchase: setPurchases };
    setters[type]?.(p => p.filter(x => x.id !== id));
    try { localStorage.removeItem(LS_PREFIX + `${type}:${id}`); } catch {}
    try { if (window.storage?.delete) await window.storage.delete(`${type}:${id}`); } catch {}
    updateDataFingerprint();
    showToast('success', '✓ Deleted');
  };

  // Track expected data counts so we can detect "data shrinkage" between sessions
  const DATA_FP_KEY = LS_PREFIX + '_dataFingerprint';
  const updateDataFingerprint = () => {
    const fp = {
      shops: shops.length,
      products: products.length,
      consignments: consignments.length,
      suppliers: suppliers.length,
      purchases: purchases.length,
      updatedAt: new Date().toISOString(),
    };
    try { localStorage.setItem(DATA_FP_KEY, JSON.stringify(fp)); } catch {}
  };

  // Detect "data shrinkage" — last session had more data than now
  const [dataShrinkage, setDataShrinkage] = useState(null);
  useEffect(() => {
    if (loading) return;
    try {
      const raw = localStorage.getItem(DATA_FP_KEY);
      if (!raw) {
        updateDataFingerprint();
        return;
      }
      const fp = JSON.parse(raw);
      const lost = {
        shops: Math.max(0, (fp.shops || 0) - shops.length),
        products: Math.max(0, (fp.products || 0) - products.length),
        consignments: Math.max(0, (fp.consignments || 0) - consignments.length),
        suppliers: Math.max(0, (fp.suppliers || 0) - suppliers.length),
        purchases: Math.max(0, (fp.purchases || 0) - purchases.length),
      };
      const totalLost = lost.shops + lost.products + lost.consignments + lost.suppliers + lost.purchases;
      if (totalLost > 0) {
        setDataShrinkage({ lost, previous: fp });
      } else {
        // Counts went up or equal — update fingerprint
        updateDataFingerprint();
      }
    } catch (e) { console.warn('Fingerprint check failed:', e); }
  }, [loading]); // Only check once after loading completes


  // ===== Computed metrics =====
  const calc = (consign) => {
    const items = consign.items || [];
    const subtotal = items.reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseInt(it.qty) || 0), 0);
    const sold = items.reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseInt(it.soldQty) || 0), 0);
    const commissionRate = parseFloat(consign.commissionRate) || 20;
    const shopShare = sold * (commissionRate / 100);
    const owedToYou = sold - shopShare;
    const returnedValue = items.reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseInt(it.returnedQty) || 0), 0);
    return { subtotal, sold, shopShare, owedToYou, returnedValue, commissionRate };
  };

  const totalDelivered = consignments.reduce((s, c) => s + calc(c).subtotal, 0);
  const totalSold = consignments.reduce((s, c) => s + calc(c).sold, 0);
  const totalOwed = consignments.filter(c => c.status !== 'paid' && c.status !== 'cancelled').reduce((s, c) => s + calc(c).owedToYou, 0);
  const totalPaid = consignments.filter(c => c.status === 'paid').reduce((s, c) => s + calc(c).owedToYou, 0);

  const totalProfit = consignments.reduce((sum, c) => {
    if (c.status === 'cancelled') return sum;
    const items = c.items || [];
    const revenue = items.reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseInt(it.soldQty) || 0), 0);
    const commission = revenue * ((parseFloat(c.commissionRate) || 20) / 100);
    const myRevenue = revenue - commission;
    const cost = items.reduce((s, it) => {
      const product = products.find(p => p.id === it.productId);
      const costPrice = parseFloat(it.cost) || parseFloat(product?.cost) || 0;
      return s + costPrice * (parseInt(it.soldQty) || 0);
    }, 0);
    return sum + (myRevenue - cost);
  }, 0);

  const totalSpent = purchases.reduce((s, p) => s + (parseFloat(p.total) || 0), 0);
  const totalUnpaidToSuppliers = purchases.filter(p => !p.paid).reduce((s, p) => s + (parseFloat(p.total) || 0), 0);
  const lowStock = products.filter(p => parseInt(p.stock) < 10);
  const openConsignments = consignments.filter(c => c.status === 'active' || c.status === 'pending-settlement');

  const now = Date.now();
  const isOverdue = (c) => {
    if (c.status === 'paid' || c.status === 'cancelled') return false;
    const date = c.deliveryDate ? new Date(c.deliveryDate).getTime() : new Date(c.createdAt).getTime();
    return (now - date) > 7 * 24 * 60 * 60 * 1000;
  };
  const overdueInvoices = consignments.filter(isOverdue);
  const overdueAmount = overdueInvoices.reduce((s, c) => s + calc(c).owedToYou, 0);

  // ===== Investor metrics — loans from David & repayments =====
  // Each investment record has: { type: 'loan' | 'repayment', amount, bucket, date, note }
  // 'loan' = David gave money to Miriam
  // 'repayment' = Miriam paid David back
  const loanTotalsBy = (bucket) => {
    const list = bucket === 'all' ? investments : investments.filter(i => (i.bucket || 'all') === bucket || bucket === 'all');
    const lent = list.filter(i => i.type === 'loan').reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);
    const repaid = list.filter(i => i.type === 'repayment').reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);
    return { lent, repaid, owed: lent - repaid };
  };
  const loanAll = loanTotalsBy('all');
  const loanSilk = loanTotalsBy('silk');
  const loanFresh = loanTotalsBy('fresh');

  // Spend per bucket — purchases that have a bucket assigned
  const spentByBucket = (bucket) => {
    return purchases.filter(p => (p.bucket || 'fresh') === bucket).reduce((s, p) => s + (parseFloat(p.total) || 0), 0);
  };
  const spentSilk = spentByBucket('silk');
  const spentFresh = spentByBucket('fresh');

  // Budget remaining = loans for that bucket − spent on that bucket
  const budgetSilk = loanSilk.lent - spentSilk;
  const budgetFresh = loanFresh.lent - spentFresh;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const greetEmoji = hour < 12 ? '☀️' : hour < 18 ? '🌸' : '🌙';

  // ===== Snapshot handler — records a backup point =====
  const saveSnapshot = async () => {
    const snap = {
      id: `snapshot_${Date.now()}`,
      takenAt: new Date().toISOString(),
      shopCount: shops.length,
      productCount: products.length,
      invoiceCount: consignments.length,
      supplierCount: suppliers.length,
      purchaseCount: purchases.length,
      totalDelivered, totalSold, totalOwed, totalPaid, totalProfit,
      totalSpent, totalUnpaidToSuppliers,
      lowStockCount: lowStock.length,
      openInvoiceCount: openConsignments.length,
      overdueCount: overdueInvoices.length, overdueAmount,
    };
    setSnapshots(prev => [snap, ...prev]);
    await storageSet(`snapshot:${snap.id}`, JSON.stringify(snap));
    return snap;
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: T.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT }}>
        <style>{`@keyframes pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }`}</style>
        <div style={{ textAlign: 'center', animation: 'pulse 1.5s ease-in-out infinite' }}>
          <MistyBloomsLogo size={220} variant="full" />
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: T.bg, fontFamily: FONT, color: T.text, paddingBottom: 40, WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.96); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .anim-fade { animation: fadeIn 0.35s cubic-bezier(0.2, 0.9, 0.4, 1); }
        .anim-slide { animation: slideUp 0.3s cubic-bezier(0.2, 0.9, 0.4, 1); }
        button { font-family: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
        button:active { transform: scale(0.97); }
        input, textarea, select { font-family: inherit; }
        input:focus, textarea:focus, select:focus { outline: none; border-color: ${T.accent} !important; }
        .row-tappable:active { background: rgba(0,0,0,0.04) !important; }
        .ios-card { background: ${T.card}; border-radius: 14px; }
        .ios-list-item { padding: 14px 16px; display: flex; align-items: center; gap: 12px; }
        .ios-list-item + .ios-list-item { border-top: 0.5px solid ${T.separator}; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 3px; }
        @keyframes toastSlide { from { transform: translate(-50%, -100%); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        @keyframes pulseWarning { 0%, 100% { box-shadow: 0 0 0 0 rgba(197, 107, 92, 0.4); } 50% { box-shadow: 0 0 0 10px rgba(197, 107, 92, 0); } }
      `}</style>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div style={{
          position: 'fixed', top: 'env(safe-area-inset-top, 12px)', left: '50%',
          background: toast.type === 'success' ? T.sage : toast.type === 'error' ? T.red : T.amber,
          color: '#fff', padding: '12px 20px', borderRadius: 12, fontSize: 14, fontWeight: 700,
          boxShadow: '0 6px 24px rgba(0,0,0,0.25)', zIndex: 9999,
          animation: 'toastSlide 0.3s cubic-bezier(0.2, 0.9, 0.4, 1)',
          minWidth: 200, maxWidth: '85vw', textAlign: 'center', letterSpacing: '0.2px',
        }}>{toast.msg}</div>
      )}

      {/* DATA SHRINKAGE WARNING — appears if data unexpectedly decreased between sessions */}
      {dataShrinkage && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: T.card, borderRadius: 16, padding: 24, maxWidth: 480, width: '100%', border: `3px solid ${T.red}`, animation: 'pulseWarning 2s infinite' }}>
            <div style={{ fontSize: 48, textAlign: 'center', marginBottom: 12 }}>⚠️</div>
            <h2 style={{ fontFamily: SERIF, fontSize: 22, color: T.red, textAlign: 'center', margin: '0 0 12px', fontWeight: 400 }}>Data may be missing!</h2>
            <p style={{ fontSize: 14, color: T.text, lineHeight: 1.6, marginBottom: 16 }}>
              Last time you had more data than now. Some items may have been lost:
            </p>
            <div style={{ background: T.redBg, padding: 14, borderRadius: 10, marginBottom: 16, fontSize: 13 }}>
              {dataShrinkage.lost.shops > 0 && <div>🛍️ <strong>{dataShrinkage.lost.shops}</strong> shops missing</div>}
              {dataShrinkage.lost.products > 0 && <div>🌷 <strong>{dataShrinkage.lost.products}</strong> stock items missing</div>}
              {dataShrinkage.lost.consignments > 0 && <div>📋 <strong>{dataShrinkage.lost.consignments}</strong> invoices missing</div>}
              {dataShrinkage.lost.suppliers > 0 && <div>🚚 <strong>{dataShrinkage.lost.suppliers}</strong> suppliers missing</div>}
              {dataShrinkage.lost.purchases > 0 && <div>🛒 <strong>{dataShrinkage.lost.purchases}</strong> purchases missing</div>}
            </div>
            <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.6, marginBottom: 18 }}>
              If you have an Excel backup, restore from it now. Otherwise, dismiss to continue (and back up regularly!)
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <button onClick={() => { setDataShrinkage(null); setShowSettings(true); }} style={{ padding: 12, background: T.accent, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                Open backup
              </button>
              <button onClick={() => { setDataShrinkage(null); updateDataFingerprint(); }} style={{ padding: 12, background: T.card, color: T.textSecondary, border: `1px solid ${T.separator}`, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}


      {/* HEADER */}
      <header style={{ background: T.bg, padding: '14px 20px 10px', position: 'sticky', top: 0, zIndex: 20, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MistyBloomsLogo size={120} variant="mark" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {(() => {
              const lastSnap = snapshots[0];
              const daysSince = lastSnap ? Math.floor((Date.now() - new Date(lastSnap.takenAt).getTime()) / (1000 * 60 * 60 * 24)) : null;
              const urgent = !lastSnap || daysSince > 2;
              return (
                <button onClick={() => setShowSettings(true)} title="Backup to Excel" style={{
                  background: urgent ? T.red : T.sage,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  animation: urgent ? 'pulseWarning 2s infinite' : 'none',
                }}>
                  💾 <span>{urgent ? 'Back up!' : 'Backed up'}</span>
                </button>
              );
            })()}
            <button onClick={() => setShowSettings(true)} style={{ background: T.card, border: `1px solid ${T.separator}`, borderRadius: 10, padding: 8, cursor: 'pointer', fontSize: 16 }}>
              ⚙️
            </button>
          </div>
        </div>
      </header>

      {/* TABS */}
      <nav style={{ padding: '6px 16px 14px', background: T.bg, position: 'sticky', top: 62, zIndex: 19 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', background: 'rgba(120,120,128,0.12)', borderRadius: 9, padding: 2, gap: 0 }}>
          {[
            { id: 'dashboard', label: 'Home', emoji: '🏠' },
            { id: 'shops', label: 'Shops', emoji: '🛍️' },
            { id: 'products', label: 'Stock', emoji: '🌷' },
            { id: 'consignments', label: 'Invoices', emoji: '📋' },
            { id: 'purchases', label: 'Buys', emoji: '🛒' },
            { id: 'investor', label: 'Investor', emoji: '💰' },
          ].map(t => {
            const active = activeTab === t.id;
            return (
              <button key={t.id} onClick={() => { setActiveTab(t.id); setSearch(''); }}
                style={{
                  flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
                  padding: '7px 6px', borderRadius: 7, border: 'none',
                  background: active ? T.card : 'transparent',
                  color: active ? T.text : T.textSecondary,
                  fontSize: 11, fontWeight: 600,
                  boxShadow: active ? '0 3px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)' : 'none',
                  transition: 'all 0.2s',
                }}>
                <span style={{ fontSize: 18, lineHeight: 1 }}>{t.emoji}</span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '4px 16px 24px' }}>

        {/* DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="anim-fade">
            <h1 style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 400, margin: '8px 0 4px', letterSpacing: '0.5px', color: T.text }}>{greeting} {greetEmoji}</h1>
            <p style={{ color: T.textSecondary, margin: '0 0 22px', fontSize: 15 }}>Here's what's happening at Misty Blooms today</p>

            {/* CRITICAL: Data persistence reminder */}
            {(() => {
              const lastSnap = snapshots[0];
              const daysSince = lastSnap ? Math.floor((Date.now() - new Date(lastSnap.takenAt).getTime()) / (1000 * 60 * 60 * 24)) : null;
              const hasData = consignments.length > 0 || purchases.length > 0;
              const needsBackup = hasData && (!lastSnap || daysSince > 2);
              if (!needsBackup) return null;
              return (
                <div className="ios-card" style={{ padding: 16, marginBottom: 14, background: '#FEF3E2', border: `2px solid ${T.amber}`, cursor: 'pointer' }} onClick={() => setShowSettings(true)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 22 }}>💾</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>
                        {!lastSnap ? 'Back up your work!' : `${daysSince} days since backup`}
                      </div>
                      <div style={{ fontSize: 12, color: T.textSecondary, marginTop: 2, lineHeight: 1.4 }}>
                        Tap here → Excel backup. Data lives in this browser only — clearing it loses everything.
                      </div>
                    </div>
                    <ChevronRight size={18} color={T.textTertiary} />
                  </div>
                </div>
              );
            })()}

            {overdueInvoices.length > 0 && (
              <div className="ios-card" style={{ padding: 18, marginBottom: 14, background: T.redBg, border: `2px solid ${T.red}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 24 }}>⚠️</span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: T.red }}>Money waiting!</div>
                    <div style={{ fontSize: 13, color: T.textSecondary }}>
                      {overdueInvoices.length} invoice{overdueInvoices.length === 1 ? '' : 's'} overdue · £{overdueAmount.toFixed(2)} to chase
                    </div>
                  </div>
                </div>
                <button onClick={() => setActiveTab('consignments')} style={{ width: '100%', padding: '11px', background: T.red, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, marginTop: 8 }}>
                  💬 Send reminders →
                </button>
              </div>
            )}

            <div className="ios-card" style={{ padding: 22, marginBottom: 16, background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accentDeep} 100%)`, color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, opacity: 0.95 }}>
                <span style={{ fontSize: 18 }}>💰</span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>Money owed to you</span>
              </div>
              <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-1px', lineHeight: 1 }}>£{totalOwed.toFixed(2)}</div>
              <div style={{ marginTop: 12, fontSize: 13, opacity: 0.9, fontWeight: 500 }}>
                Across {openConsignments.length} open {openConsignments.length === 1 ? 'invoice' : 'invoices'}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 10 }}>
              <BigStat emoji="📋" label="Invoices" value={consignments.length} bg={T.blueBg} />
              <BigStat emoji="✅" label="Paid" value={consignments.filter(c => c.status === 'paid').length} bg={T.sageBg} />
              <BigStat emoji="⏰" label="Unpaid" value={consignments.filter(c => c.status !== 'paid' && c.status !== 'cancelled').length} bg={T.amberBg} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 22 }}>
              <BigStat emoji="🛍️" label="Active shops" value={shops.length} bg={T.accentLight} />
              <BigStat emoji="💸" label="Profit" value={`£${totalProfit.toFixed(0)}`} bg={T.sageBg} />
              <BigStat emoji="💵" label="Sold" value={`£${totalSold.toFixed(0)}`} bg={T.bgGrouped} />
              <BigStat emoji={lowStock.length > 0 ? '🚨' : '🌷'} label="Low stock" value={lowStock.length} bg={lowStock.length > 0 ? T.redBg : T.sageBg} />
            </div>

            {(purchases.length > 0 || suppliers.length > 0) && (
              <>
                <SectionHeader title="🛒 Purchases" action={() => setActiveTab('purchases')} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 22 }}>
                  <BigStat emoji="🚚" label="Suppliers" value={suppliers.length} bg={T.bgGrouped} />
                  <BigStat emoji="🛒" label="Spent" value={`£${totalSpent.toFixed(0)}`} bg={T.bgGrouped} />
                  <BigStat emoji={totalUnpaidToSuppliers > 0 ? '⚠️' : '✅'} label="You owe" value={`£${totalUnpaidToSuppliers.toFixed(0)}`} bg={totalUnpaidToSuppliers > 0 ? T.amberBg : T.sageBg} />
                </div>
              </>
            )}

            {investments.length > 0 && (
              <>
                <SectionHeader title="💰 Investor" action={() => setActiveTab('investor')} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 22 }}>
                  <BigStat emoji="💰" label="Lent" value={`£${loanAll.lent.toFixed(0)}`} bg={T.amberBg} />
                  <BigStat emoji="💸" label="Repaid" value={`£${loanAll.repaid.toFixed(0)}`} bg={T.sageBg} />
                  <BigStat emoji={loanAll.owed > 0 ? '⚠️' : '✅'} label="Still owed" value={`£${loanAll.owed.toFixed(0)}`} bg={loanAll.owed > 0 ? T.amberBg : T.sageBg} />
                </div>
              </>
            )}

            <SectionHeader title="Open Invoices" action={openConsignments.length > 0 ? () => setActiveTab('consignments') : null} />
            <div className="ios-card" style={{ marginBottom: 22, overflow: 'hidden' }}>
              {openConsignments.length === 0 ? (
                <div style={{ padding: 28, textAlign: 'center', color: T.textTertiary, fontSize: 14 }}>No open invoices yet</div>
              ) : (
                openConsignments.slice(0, 4).map(c => {
                  const shop = shops.find(s => s.id === c.shopId);
                  const m = calc(c);
                  return (
                    <div key={c.id} className="row-tappable ios-list-item" onClick={() => setViewingInvoice(c)} style={{ cursor: 'pointer' }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: T.bgGrouped, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <FileText size={17} color={T.accent} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{shop?.name || 'Unknown shop'}</div>
                        <div style={{ fontSize: 13, color: T.textTertiary, marginTop: 1 }}>{c.invoiceNumber} · {(c.items || []).length} items</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 15, fontWeight: 600 }}>£{m.owedToYou.toFixed(2)}</div>
                        <StatusBadge status={c.status} />
                      </div>
                      <ChevronRight size={16} color={T.textQuaternary} />
                    </div>
                  );
                })
              )}
            </div>

            <SectionHeader title="📊 Profit & Loss" action={() => setShowPnL(true)} actionLabel="See breakdown" />
            <div className="ios-card row-tappable" onClick={() => setShowPnL(true)} style={{ padding: 18, marginBottom: 22, cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 400, color: totalProfit >= 0 ? T.sage : T.red, letterSpacing: '-0.5px' }}>
                    {totalProfit >= 0 ? '+' : ''}£{totalProfit.toFixed(2)}
                  </div>
                  <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 2, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    {totalProfit >= 0 ? 'Net profit' : 'Net loss'} so far
                  </div>
                </div>
                <div style={{ fontSize: 32 }}>{totalProfit >= 0 ? '🌿' : '🥀'}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, paddingTop: 12, borderTop: `1px solid ${T.separator}` }}>
                <div><div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 600 }}>📥 Income</div><div style={{ fontSize: 14, fontWeight: 700, color: T.sage }}>£{totalSold.toFixed(0)}</div></div>
                <div><div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 600 }}>📤 Spent</div><div style={{ fontSize: 14, fontWeight: 700, color: T.red }}>£{totalSpent.toFixed(0)}</div></div>
                <div><div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 600 }}>👀 Tap</div><div style={{ fontSize: 14, fontWeight: 700, color: T.accent }}>Details →</div></div>
              </div>
            </div>

            {lowStock.length > 0 && (
              <>
                <SectionHeader title="🌷 Stock Watch" action={() => setActiveTab('products')} />
                <div className="ios-card" style={{ overflow: 'hidden' }}>
                  {lowStock.slice(0, 4).map(p => (
                    <div key={p.id} className="ios-list-item">
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: T.redBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>🌷</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</div>
                        <div style={{ fontSize: 13, color: T.textTertiary }}>£{p.price} per unit</div>
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: T.red }}>{p.stock} left</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* SHOPS */}
        {activeTab === 'shops' && (
          <ListView
            title="Shops" subtitle="Retail partners taking your stock"
            items={shops.filter(s => !search || s.name?.toLowerCase().includes(search.toLowerCase()) || s.contactName?.toLowerCase().includes(search.toLowerCase()))}
            search={search} setSearch={setSearch}
            onAdd={() => { setEditingItem(null); setShowForm('shop'); }}
            onEdit={(item) => { setEditingItem(item); setShowForm('shop'); }}
            onDelete={(id) => deleteItem('shop', id)}
            emptyText="No shops yet. Add your first retail partner."
            renderItem={(s) => {
              const shopConsigns = consignments.filter(c => c.shopId === s.id);
              const owedFromShop = shopConsigns.filter(c => c.status !== 'paid' && c.status !== 'cancelled').reduce((sum, c) => sum + calc(c).owedToYou, 0);
              return (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 3 }}>{s.name}</div>
                      {s.contactName && <div style={{ fontSize: 14, color: T.textSecondary, marginBottom: 2 }}>{s.contactName}</div>}
                    </div>
                    {owedFromShop > 0 && (
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 600, letterSpacing: '0.4px', textTransform: 'uppercase' }}>Owes</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: T.accent }}>£{owedFromShop.toFixed(2)}</div>
                      </div>
                    )}
                  </div>
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: `0.5px solid ${T.separator}`, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {s.phone && <Detail icon={Phone}>{s.phone}</Detail>}
                    {s.email && <Detail icon={Mail}>{s.email}</Detail>}
                    {s.address && <Detail icon={MapPin}>{s.address}</Detail>}
                    <Detail icon={TrendingUp}>{s.commissionRate || 20}% commission to shop</Detail>
                  </div>
                </>
              );
            }}
          />
        )}

        {/* PRODUCTS */}
        {activeTab === 'products' && (
          <ListView
            title="Stock" subtitle="Your flowers & arrangements"
            items={products.filter(p => !search || p.name?.toLowerCase().includes(search.toLowerCase()))}
            search={search} setSearch={setSearch}
            onAdd={() => { setEditingItem(null); setShowForm('product'); }}
            onEdit={(item) => { setEditingItem(item); setShowForm('product'); }}
            onDelete={(id) => deleteItem('product', id)}
            emptyText="No stock items yet."
            renderItem={(p) => {
              const low = parseInt(p.stock) < 10;
              const cost = parseFloat(p.cost) || 0;
              const price = parseFloat(p.price) || 0;
              const margin = price - cost;
              return (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 6 }}>
                    <div style={{ fontSize: 17, fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: low ? T.red : T.sage, padding: '3px 9px', background: low ? 'rgba(197,107,92,0.12)' : 'rgba(155,174,138,0.18)', borderRadius: 6 }}>
                      {p.stock} {parseInt(p.stock) === 1 ? 'unit' : 'units'}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 13, color: T.textSecondary, marginTop: 4 }}>
                    <span><span style={{ color: T.textTertiary }}>Cost</span> £{cost.toFixed(2)}</span>
                    <span><span style={{ color: T.textTertiary }}>Sell</span> £{price.toFixed(2)}</span>
                    {(cost > 0 || price > 0) && <span style={{ color: margin > 0 ? T.sage : T.red, fontWeight: 600 }}>+£{margin.toFixed(2)}</span>}
                  </div>
                  <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 3 }}>per {p.unit || 'unit'}</div>
                  {p.notes && <div style={{ fontSize: 13, color: T.textTertiary, marginTop: 8, paddingTop: 8, borderTop: `0.5px solid ${T.separator}` }}>{p.notes}</div>}
                </>
              );
            }}
          />
        )}

        {/* CONSIGNMENTS */}
        {activeTab === 'consignments' && (
          <div className="anim-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 4, marginTop: 8 }}>
              <div>
                <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 400, margin: '0 0 4px', letterSpacing: '0.5px', color: T.text }}>Invoices</h1>
                <p style={{ color: T.textTertiary, margin: 0, fontSize: 15 }}>Sale-or-return consignments</p>
              </div>
              <button onClick={() => { if (shops.length === 0) { alert('Add a shop first'); return; } setEditingItem(null); setShowForm('consign'); }}
                style={{ background: T.accent, color: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
                <Plus size={15} strokeWidth={2.5} /> New
              </button>
            </div>
            <div style={{ position: 'relative', margin: '18px 0' }}>
              <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: T.textTertiary }} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by shop or invoice #..."
                style={{ width: '100%', padding: '11px 12px 11px 36px', background: 'rgba(120,120,128,0.12)', border: '1px solid transparent', borderRadius: 10, fontSize: 15, color: T.text, boxSizing: 'border-box' }}
              />
            </div>
            {(() => {
              const filtered = consignments
                .filter(c => {
                  if (!search) return true;
                  const shop = shops.find(s => s.id === c.shopId);
                  return c.invoiceNumber?.toLowerCase().includes(search.toLowerCase()) || shop?.name?.toLowerCase().includes(search.toLowerCase());
                })
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              return filtered.length === 0 ? (
                <div className="ios-card" style={{ padding: 40, textAlign: 'center', color: T.textTertiary, fontSize: 14 }}>No invoices yet. Create your first consignment.</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {filtered.map(c => {
                    const shop = shops.find(s => s.id === c.shopId);
                    const m = calc(c);
                    return (
                      <div key={c.id} className="ios-card row-tappable" onClick={() => setViewingInvoice(c)} style={{ padding: 16, cursor: 'pointer' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 12, fontWeight: 600, color: T.textTertiary, letterSpacing: '0.4px', marginBottom: 2 }}>{c.invoiceNumber}</div>
                            <div style={{ fontSize: 17, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{shop?.name || 'Unknown shop'}</div>
                          </div>
                          <StatusBadge status={c.status} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, paddingTop: 12, borderTop: `0.5px solid ${T.separator}` }}>
                          <div>
                            <div style={{ fontSize: 12, color: T.textTertiary, marginBottom: 2 }}>Delivered · Sold · You get</div>
                            <div style={{ fontSize: 14, fontWeight: 500 }}>
                              <span style={{ color: T.textSecondary }}>£{m.subtotal.toFixed(0)}</span>
                              <span style={{ color: T.textQuaternary, margin: '0 6px' }}>·</span>
                              <span style={{ color: T.sage }}>£{m.sold.toFixed(0)}</span>
                              <span style={{ color: T.textQuaternary, margin: '0 6px' }}>·</span>
                              <span style={{ fontWeight: 700, color: T.accent }}>£{m.owedToYou.toFixed(0)}</span>
                            </div>
                          </div>
                          <ChevronRight size={18} color={T.textQuaternary} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        )}

        {/* PURCHASES */}
        {activeTab === 'purchases' && (
          <PurchasesTab
            suppliers={suppliers} purchases={purchases} search={search} setSearch={setSearch}
            onAddSupplier={() => { setEditingItem(null); setShowForm('supplier'); }}
            onEditSupplier={(item) => { setEditingItem(item); setShowForm('supplier'); }}
            onDeleteSupplier={(id) => deleteItem('supplier', id)}
            onAddPurchase={() => { if (suppliers.length === 0) { alert('Add a supplier first'); return; } setEditingItem(null); setShowForm('purchase'); }}
            onEditPurchase={(item) => { setEditingItem(item); setShowForm('purchase'); }}
            onDeletePurchase={(id) => deleteItem('purchase', id)}
            onTogglePaid={async (purchase) => {
              const updated = { ...purchase, paid: !purchase.paid, paidDate: !purchase.paid ? new Date().toISOString().slice(0, 10) : null };
              await saveItem('purchase', updated, setPurchases);
            }}
          />
        )}

        {activeTab === 'investor' && (
          <InvestorTab
            investments={investments}
            purchases={purchases}
            loanSilk={loanSilk} loanFresh={loanFresh} loanAll={loanAll}
            spentSilk={spentSilk} spentFresh={spentFresh}
            budgetSilk={budgetSilk} budgetFresh={budgetFresh}
            onAdd={(type) => { setEditingItem({ type }); setShowForm('investment'); }}
            onEdit={(item) => { setEditingItem(item); setShowForm('investment'); }}
            onDelete={(id) => deleteItem('investment', id)}
          />
        )}
      </main>

      {/* MODALS */}
      {showForm === 'shop' && <ShopForm initial={editingItem} onSave={(d) => saveItem('shop', d, setShops)} onClose={() => { setShowForm(null); setEditingItem(null); }} />}
      {showForm === 'product' && <ProductForm initial={editingItem} onSave={(d) => saveItem('product', d, setProducts)} onClose={() => { setShowForm(null); setEditingItem(null); }} />}
      {showForm === 'consign' && <ConsignmentForm initial={editingItem} shops={shops} products={products} consignments={consignments} onSave={(d) => saveItem('consign', d, setConsignments)} onClose={() => { setShowForm(null); setEditingItem(null); }} />}
      {showForm === 'supplier' && <SupplierForm initial={editingItem} onSave={(d) => saveItem('supplier', d, setSuppliers)} onClose={() => { setShowForm(null); setEditingItem(null); }} />}
      {showForm === 'purchase' && <PurchaseForm initial={editingItem} suppliers={suppliers} onSave={(d) => saveItem('purchase', d, setPurchases)} onClose={() => { setShowForm(null); setEditingItem(null); }} />}
      {showForm === 'investment' && <InvestmentForm initial={editingItem} onSave={(d) => saveItem('investment', d, setInvestments)} onClose={() => { setShowForm(null); setEditingItem(null); }} />}

      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)}
          data={{ shops, products, consignments, suppliers, purchases }}
          snapshots={snapshots}
          onSnapshotTaken={saveSnapshot}
          onRestore={(restored) => {
            if (restored.shops) setShops(restored.shops);
            if (restored.products) setProducts(restored.products);
            if (restored.consignments) setConsignments(restored.consignments);
            if (restored.suppliers) setSuppliers(restored.suppliers);
            if (restored.purchases) setPurchases(restored.purchases);
            (async () => {
              try {
                const saveAll = async (prefix, items) => {
                  for (const item of items) {
                    if (item?.id) await storageSet(`${prefix}:${item.id}`, JSON.stringify(item));
                  }
                };
                if (restored.shops) await saveAll('shop', restored.shops);
                if (restored.products) await saveAll('product', restored.products);
                if (restored.consignments) await saveAll('consign', restored.consignments);
                if (restored.suppliers) await saveAll('supplier', restored.suppliers);
                if (restored.purchases) await saveAll('purchase', restored.purchases);
              } catch (e) { console.warn(e); }
            })();
          }}
        />
      )}

      {showReminder && <ReminderModal invoice={showReminder.invoice} shop={showReminder.shop} calc={calc} onClose={() => setShowReminder(null)} />}
      {showPnL && <ProfitLossModal onClose={() => setShowPnL(false)} consignments={consignments} purchases={purchases} products={products} shops={shops} suppliers={suppliers} calc={calc} />}

      {viewingInvoice && (
        <InvoiceView
          consign={viewingInvoice} shop={shops.find(s => s.id === viewingInvoice.shopId)} calc={calc}
          onClose={() => setViewingInvoice(null)}
          onEdit={() => { setEditingItem(viewingInvoice); setShowForm('consign'); setViewingInvoice(null); }}
          onSendReminder={() => { setShowReminder({ invoice: viewingInvoice, shop: shops.find(s => s.id === viewingInvoice.shopId) }); }}
          onUpdate={async (updated) => { const saved = await saveItem('consign', updated, setConsignments); if (saved) setViewingInvoice(saved); }}
          onDelete={async () => { await deleteItem('consign', viewingInvoice.id); setViewingInvoice(null); }}
        />
      )}
    </div>
  );
}

// ============== UI HELPERS ==============

function BigStat({ emoji, label, value, bg }) {
  return (
    <div style={{ background: bg || T.card, padding: 14, borderRadius: 14, textAlign: 'center', border: `1px solid ${T.separator}` }}>
      <div style={{ fontSize: 24, marginBottom: 4 }}>{emoji}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: T.text, letterSpacing: '-0.5px', lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontSize: 11, color: T.textSecondary, fontWeight: 600, marginTop: 4, letterSpacing: '0.2px' }}>{label}</div>
    </div>
  );
}

function SectionHeader({ title, action, actionLabel }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, padding: '0 4px' }}>
      <h2 style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 400, color: T.textSecondary, margin: 0, letterSpacing: '0.5px', fontStyle: 'italic' }}>{title}</h2>
      {action && <button onClick={action} style={{ background: 'transparent', border: 'none', color: T.accent, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{actionLabel || 'See all'}</button>}
    </div>
  );
}

function Detail({ icon: Icon, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: T.textSecondary }}>
      <Icon size={12} color={T.textTertiary} strokeWidth={2} />
      <span style={{ whiteSpace: 'pre-line' }}>{children}</span>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    'active': { bg: 'rgba(61,59,74,0.12)', fg: T.accent, label: 'Active' },
    'pending-settlement': { bg: 'rgba(212,165,116,0.2)', fg: '#8B6B3A', label: 'Settling' },
    'paid': { bg: 'rgba(155,174,138,0.22)', fg: '#5C7549', label: 'Paid' },
    'cancelled': { bg: 'rgba(197,107,92,0.15)', fg: T.red, label: 'Cancelled' },
  };
  const s = map[status] || map.active;
  return (
    <span style={{ display: 'inline-block', padding: '3px 9px', background: s.bg, color: s.fg, fontSize: 11, borderRadius: 6, letterSpacing: '0.3px', fontWeight: 600 }}>
      {s.label}
    </span>
  );
}

function PaidBadge({ paid }) {
  return (
    <span style={{ display: 'inline-block', padding: '3px 9px',
      background: paid ? 'rgba(155,174,138,0.22)' : 'rgba(212,165,116,0.2)',
      color: paid ? '#5C7549' : '#8B6B3A',
      fontSize: 11, borderRadius: 6, letterSpacing: '0.3px', fontWeight: 600, marginTop: 4,
    }}>
      {paid ? 'Paid' : 'Unpaid'}
    </span>
  );
}

function ListView({ title, subtitle, items, search, setSearch, onAdd, onEdit, onDelete, renderItem, emptyText }) {
  return (
    <div className="anim-fade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 4, marginTop: 8 }}>
        <div>
          <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 400, margin: '0 0 4px', letterSpacing: '0.5px', color: T.text }}>{title}</h1>
          {subtitle && <p style={{ color: T.textTertiary, margin: 0, fontSize: 15 }}>{subtitle}</p>}
        </div>
        <button onClick={onAdd} style={{ background: T.accent, color: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
          <Plus size={15} strokeWidth={2.5} /> New
        </button>
      </div>
      <div style={{ position: 'relative', margin: '18px 0' }}>
        <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: T.textTertiary }} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`Search ${title.toLowerCase()}...`}
          style={{ width: '100%', padding: '11px 12px 11px 36px', background: 'rgba(120,120,128,0.12)', border: '1px solid transparent', borderRadius: 10, fontSize: 15, color: T.text, boxSizing: 'border-box' }}
        />
      </div>
      {items.length === 0 ? (
        <div className="ios-card" style={{ padding: 40, textAlign: 'center', color: T.textTertiary, fontSize: 14 }}>{emptyText}</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
          {items.map(item => (
            <div key={item.id} className="ios-card" style={{ padding: 16, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 2 }}>
                <button onClick={() => onEdit(item)} style={{ padding: 6, background: 'transparent', border: 'none', color: T.textTertiary, borderRadius: 6 }}><Edit3 size={14} /></button>
                <button onClick={() => onDelete(item.id)} style={{ padding: 6, background: 'transparent', border: 'none', color: T.textTertiary, borderRadius: 6 }}><Trash2 size={14} /></button>
              </div>
              <div style={{ paddingRight: 50 }}>{renderItem(item)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============== MODAL SHELL ==============

function Modal({ title, onClose, children, footer, wide }) {
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div className="anim-slide" onClick={(e) => e.stopPropagation()} style={{ background: T.bgGrouped, borderRadius: '14px 14px 0 0', width: '100%', maxWidth: wide ? 720 : 540, maxHeight: '94vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', borderBottom: `0.5px solid ${T.separator}`, flexShrink: 0 }}>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: T.accent, fontSize: 16, fontWeight: 500, padding: 4 }}>Cancel</button>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{title}</h2>
          <div style={{ width: 60, textAlign: 'right' }}>{footer}</div>
        </div>
        <div style={{ overflowY: 'auto', padding: 16, flex: 1 }}>{children}</div>
      </div>
    </div>
  );
}

function FormGroup({ label, hint, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: 'block', fontSize: 12, color: T.textTertiary, marginBottom: 6, fontWeight: 600, letterSpacing: '0.3px', textTransform: 'uppercase', paddingLeft: 4 }}>{label}</label>
      {children}
      {hint && <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 5, paddingLeft: 4 }}>{hint}</div>}
    </div>
  );
}

const inputCls = { width: '100%', padding: '12px 14px', background: T.card, border: `0.5px solid ${T.separatorOpaque}`, borderRadius: 10, fontSize: 15, color: T.text, boxSizing: 'border-box' };

function SaveBtn({ onClick, label = 'Save' }) {
  return <button type="button" onClick={(e) => { e.preventDefault(); onClick && onClick(e); }} style={{ background: 'transparent', border: 'none', color: T.accent, fontSize: 16, fontWeight: 700, padding: 4, cursor: 'pointer' }}>{label}</button>;
}

function Row({ label, value, color, bold }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: bold ? 16 : 13, fontWeight: bold ? 700 : 500 }}>
      <span style={{ color: bold ? T.text : T.textSecondary }}>{label}</span>
      <span style={{ color: color || (bold ? T.accent : T.text) }}>{value}</span>
    </div>
  );
}

function NumField({ label, value, onChange, step }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 10, color: T.textTertiary, marginBottom: 3, fontWeight: 600, letterSpacing: '0.3px', textTransform: 'uppercase' }}>{label}</label>
      <input type="number" step={step} value={value || ''} onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%', padding: '7px 8px', background: T.bgGrouped, border: `0.5px solid ${T.separator}`, borderRadius: 7, fontSize: 13, color: T.text, boxSizing: 'border-box' }} />
    </div>
  );
}

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

// ============== FORMS ==============

function ShopForm({ initial, onSave, onClose }) {
  const [d, setD] = useState(initial || { name: '', contactName: '', phone: '', email: '', address: '', commissionRate: '20', notes: '' });
  const submit = (e) => { e?.preventDefault(); if (!d.name?.trim()) return alert('Shop name is required'); onSave(d); };
  return (
    <Modal title={initial ? 'Edit Shop' : 'New Shop'} onClose={onClose} footer={<SaveBtn onClick={submit} />}>
      <div>
        <FormGroup label="Shop name *"><input style={inputCls} value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} placeholder="e.g. The Petal Studio" autoFocus /></FormGroup>
        <FormGroup label="Contact person"><input style={inputCls} value={d.contactName || ''} onChange={(e) => setD({ ...d, contactName: e.target.value })} placeholder="Owner / manager name" /></FormGroup>
        <FormGroup label="Phone"><input type="tel" style={inputCls} value={d.phone || ''} onChange={(e) => setD({ ...d, phone: e.target.value })} /></FormGroup>
        <FormGroup label="Email"><input type="email" style={inputCls} value={d.email || ''} onChange={(e) => setD({ ...d, email: e.target.value })} /></FormGroup>
        <FormGroup label="Address"><textarea rows={2} style={inputCls} value={d.address || ''} onChange={(e) => setD({ ...d, address: e.target.value })} /></FormGroup>
        <FormGroup label="Commission rate (%)" hint="Percentage of sales the shop keeps. Default 20%.">
          <input type="number" step="0.1" min="0" max="100" style={inputCls} value={d.commissionRate || ''} onChange={(e) => setD({ ...d, commissionRate: e.target.value })} />
        </FormGroup>
        <FormGroup label="Notes"><textarea rows={2} style={inputCls} value={d.notes || ''} onChange={(e) => setD({ ...d, notes: e.target.value })} placeholder="Payment terms, preferences, etc." /></FormGroup>
      </div>
    </Modal>
  );
}

function ProductForm({ initial, onSave, onClose }) {
  const [d, setD] = useState(initial || { name: '', stock: '', cost: '', price: '', unit: 'stem', notes: '' });
  const submit = (e) => { e?.preventDefault(); if (!d.name?.trim()) return alert('Name required'); onSave(d); };
  const margin = (parseFloat(d.price) || 0) - (parseFloat(d.cost) || 0);
  return (
    <Modal title={initial ? 'Edit Stock' : 'New Stock Item'} onClose={onClose} footer={<SaveBtn onClick={submit} />}>
      <div>
        <FormGroup label="Name *"><input style={inputCls} value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} placeholder="e.g. Pink Peony Bouquet" autoFocus /></FormGroup>
        <FormGroup label="Stock quantity"><input type="number" style={inputCls} value={d.stock || ''} onChange={(e) => setD({ ...d, stock: e.target.value })} /></FormGroup>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <FormGroup label="Your cost (£)" hint="What you paid"><input type="number" step="0.01" style={inputCls} value={d.cost || ''} onChange={(e) => setD({ ...d, cost: e.target.value })} placeholder="0.00" /></FormGroup>
          <FormGroup label="Sell price (£)" hint="What shops sell it for"><input type="number" step="0.01" style={inputCls} value={d.price || ''} onChange={(e) => setD({ ...d, price: e.target.value })} placeholder="0.00" /></FormGroup>
        </div>
        {(d.cost || d.price) && (
          <div style={{ background: T.card, padding: 12, borderRadius: 10, marginBottom: 14, fontSize: 13 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: T.textSecondary }}>
              <span>Margin per unit</span>
              <span style={{ fontWeight: 700, color: margin > 0 ? T.sage : T.red }}>£{margin.toFixed(2)}</span>
            </div>
          </div>
        )}
        <FormGroup label="Unit">
          <select style={inputCls} value={d.unit} onChange={(e) => setD({ ...d, unit: e.target.value })}>
            <option value="stem">stem</option><option value="bunch">bunch</option><option value="bouquet">bouquet</option><option value="arrangement">arrangement</option><option value="piece">piece</option>
          </select>
        </FormGroup>
        <FormGroup label="Notes"><textarea rows={2} style={inputCls} value={d.notes || ''} onChange={(e) => setD({ ...d, notes: e.target.value })} placeholder="Supplier, season, color, etc." /></FormGroup>
      </div>
    </Modal>
  );
}

function ConsignmentForm({ initial, shops, products, consignments, onSave, onClose }) {
  const generateInvoiceNumber = () => {
    const year = new Date().getFullYear();
    const existing = consignments.filter(c => c.invoiceNumber?.startsWith(`MB-${year}`)).length;
    return `MB-${year}-${String(existing + 1).padStart(3, '0')}`;
  };
  const [d, setD] = useState(initial || {
    invoiceNumber: generateInvoiceNumber(),
    shopId: shops[0]?.id || '',
    deliveryDate: new Date().toISOString().slice(0, 10),
    commissionRate: shops[0]?.commissionRate || '20',
    items: [], status: 'active', notes: '',
  });
  const addItem = () => setD({ ...d, items: [...(d.items || []), { id: `i_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`, productId: '', name: '', qty: 1, soldQty: 0, returnedQty: 0, price: 0 }] });
  const updateItem = (idx, patch) => setD({ ...d, items: d.items.map((it, i) => i === idx ? { ...it, ...patch } : it) });
  const removeItem = (idx) => setD({ ...d, items: d.items.filter((_, i) => i !== idx) });
  const onShopChange = (shopId) => { const shop = shops.find(s => s.id === shopId); setD({ ...d, shopId, commissionRate: shop?.commissionRate || d.commissionRate }); };
  const onProductPick = (idx, productId) => {
    const p = products.find(x => x.id === productId);
    if (p) updateItem(idx, { productId, name: p.name, price: p.price, cost: p.cost, unit: p.unit });
    else updateItem(idx, { productId: '' });
  };
  const submit = (e) => {
    e?.preventDefault();
    if (!d.shopId) return alert('Choose a shop');
    if (!d.items || d.items.length === 0) return alert('Add at least one item');
    onSave(d);
  };
  const subtotal = (d.items || []).reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseInt(it.qty) || 0), 0);
  const sold = (d.items || []).reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseInt(it.soldQty) || 0), 0);
  const returnedValue = (d.items || []).reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseInt(it.returnedQty) || 0), 0);
  const shopShare = sold * ((parseFloat(d.commissionRate) || 0) / 100);
  const owedToYou = sold - shopShare;
  return (
    <Modal title={initial ? 'Edit Invoice' : 'New Invoice'} onClose={onClose} footer={<SaveBtn onClick={submit} />} wide>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <FormGroup label="Invoice #"><input style={inputCls} value={d.invoiceNumber} onChange={(e) => setD({ ...d, invoiceNumber: e.target.value })} /></FormGroup>
          <FormGroup label="Delivery date"><input type="date" style={inputCls} value={d.deliveryDate || ''} onChange={(e) => setD({ ...d, deliveryDate: e.target.value })} /></FormGroup>
        </div>
        <FormGroup label="Shop *">
          <select style={inputCls} value={d.shopId} onChange={(e) => onShopChange(e.target.value)}>
            <option value="">— Choose shop —</option>
            {shops.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </FormGroup>
        <FormGroup label="Commission rate (%)" hint="Shop's percentage of each sale">
          <input type="number" step="0.1" style={inputCls} value={d.commissionRate} onChange={(e) => setD({ ...d, commissionRate: e.target.value })} />
        </FormGroup>
        <FormGroup label="Status">
          <select style={inputCls} value={d.status} onChange={(e) => setD({ ...d, status: e.target.value })}>
            <option value="active">Active — on sale at shop</option>
            <option value="pending-settlement">Settling — counting returns</option>
            <option value="paid">Paid — settled</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </FormGroup>
        <div style={{ marginTop: 18, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Items delivered</h3>
          <button type="button" onClick={addItem} style={{ background: T.accent, color: '#fff', border: 'none', borderRadius: 8, padding: '7px 11px', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Plus size={13} strokeWidth={2.5} /> Add item
          </button>
        </div>
        {(!d.items || d.items.length === 0) ? (
          <div style={{ padding: 24, textAlign: 'center', color: T.textTertiary, fontSize: 13, background: T.card, borderRadius: 10 }}>No items yet. Tap "Add item" to start.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.items.map((it, idx) => (
              <div key={it.id || idx} style={{ background: T.card, padding: 12, borderRadius: 10, border: `0.5px solid ${T.separatorOpaque}` }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ flex: 1 }}>
                    <select value={it.productId || ''} onChange={(e) => onProductPick(idx, e.target.value)} style={{ ...inputCls, padding: '8px 10px', fontSize: 13, marginBottom: 6 }}>
                      <option value="">— Pick from stock or type below —</option>
                      {products.map(p => <option key={p.id} value={p.id}>{p.name} {p.unit ? `(${p.unit})` : ''} {p.price ? `— £${p.price}` : ''}</option>)}
                    </select>
                    <input style={{ ...inputCls, padding: '8px 10px', fontSize: 13 }} value={it.name || ''} onChange={(e) => updateItem(idx, { name: e.target.value })} placeholder="Item description" />
                  </div>
                  <button type="button" onClick={() => removeItem(idx)} style={{ background: 'transparent', border: 'none', color: T.red, padding: 6 }}><Trash2 size={15} /></button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                  <NumField label="Qty" value={it.qty} onChange={(v) => updateItem(idx, { qty: v })} />
                  <NumField label="Sold" value={it.soldQty} onChange={(v) => updateItem(idx, { soldQty: v })} />
                  <NumField label="Returned" value={it.returnedQty} onChange={(v) => updateItem(idx, { returnedQty: v })} />
                  <NumField label="Price (£)" value={it.price} onChange={(v) => updateItem(idx, { price: v })} step="0.01" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ background: T.card, padding: 14, borderRadius: 10, marginTop: 14 }}>
          <Row label="Total delivered value" value={`£${subtotal.toFixed(2)}`} color={T.textSecondary} />
          <Row label="Returned (not charged)" value={`-£${returnedValue.toFixed(2)}`} color={T.textTertiary} />
          <div style={{ height: 1, background: T.separator, margin: '6px 0' }} />
          <Row label="Sold value" value={`£${sold.toFixed(2)}`} color={T.sage} />
          <Row label={`Shop's commission (${d.commissionRate}%)`} value={`-£${shopShare.toFixed(2)}`} color={T.textSecondary} />
          <div style={{ height: 1, background: T.separator, margin: '8px 0' }} />
          <Row label="You receive" value={`£${owedToYou.toFixed(2)}`} bold />
        </div>
        <FormGroup label="Notes"><textarea rows={2} style={{ ...inputCls, marginTop: 14 }} value={d.notes || ''} onChange={(e) => setD({ ...d, notes: e.target.value })} placeholder="Delivery notes, terms, etc." /></FormGroup>
      </div>
    </Modal>
  );
}

function SupplierForm({ initial, onSave, onClose }) {
  const [d, setD] = useState(initial || { name: '', contactName: '', phone: '', email: '', address: '', notes: '' });
  const submit = (e) => { e?.preventDefault(); if (!d.name?.trim()) return alert('Supplier name is required'); onSave(d); };
  return (
    <Modal title={initial ? 'Edit Supplier' : 'New Supplier'} onClose={onClose} footer={<SaveBtn onClick={submit} />}>
      <div>
        <FormGroup label="Supplier name *"><input style={inputCls} value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} placeholder="e.g. New Covent Garden Market" autoFocus /></FormGroup>
        <FormGroup label="Contact person"><input style={inputCls} value={d.contactName || ''} onChange={(e) => setD({ ...d, contactName: e.target.value })} placeholder="Their name" /></FormGroup>
        <FormGroup label="Phone"><input type="tel" style={inputCls} value={d.phone || ''} onChange={(e) => setD({ ...d, phone: e.target.value })} /></FormGroup>
        <FormGroup label="Email"><input type="email" style={inputCls} value={d.email || ''} onChange={(e) => setD({ ...d, email: e.target.value })} /></FormGroup>
        <FormGroup label="Address"><textarea rows={2} style={inputCls} value={d.address || ''} onChange={(e) => setD({ ...d, address: e.target.value })} /></FormGroup>
        <FormGroup label="Notes" hint="Payment terms, what they specialise in, etc."><textarea rows={3} style={inputCls} value={d.notes || ''} onChange={(e) => setD({ ...d, notes: e.target.value })} placeholder="e.g. Pays Net 30, best for roses & peonies" /></FormGroup>
      </div>
    </Modal>
  );
}

function PurchaseForm({ initial, suppliers, onSave, onClose }) {
  const [d, setD] = useState(initial || {
    supplierId: suppliers[0]?.id || '',
    purchaseDate: new Date().toISOString().slice(0, 10),
    invoiceRef: '', items: [], total: '', paid: false, paidDate: '', paidMethod: '', notes: '',
    bucket: 'fresh', // Default to fresh flowers
  });
  const addItem = () => setD({ ...d, items: [...(d.items || []), { id: `pi_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`, name: '', qty: 1, price: 0 }] });
  const updateItem = (idx, patch) => setD({ ...d, items: d.items.map((it, i) => i === idx ? { ...it, ...patch } : it) });
  const removeItem = (idx) => setD({ ...d, items: d.items.filter((_, i) => i !== idx) });
  const itemsTotal = (d.items || []).reduce((s, it) => s + (parseFloat(it.price) || 0) * (parseFloat(it.qty) || 0), 0);
  const useItemsTotal = () => setD({ ...d, total: itemsTotal.toFixed(2) });
  const submit = (e) => {
    e?.preventDefault();
    if (!d.supplierId) return alert('Choose a supplier');
    const total = d.total || itemsTotal;
    if (!total || parseFloat(total) <= 0) return alert('Enter a total amount or add items');
    onSave({ ...d, total: total.toString() });
  };
  return (
    <Modal title={initial ? 'Edit Purchase' : 'New Purchase'} onClose={onClose} footer={<SaveBtn onClick={submit} />} wide>
      <div>
        <FormGroup label="Supplier *">
          <select style={inputCls} value={d.supplierId} onChange={(e) => setD({ ...d, supplierId: e.target.value })}>
            <option value="">— Choose supplier —</option>
            {suppliers.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </FormGroup>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <FormGroup label="Purchase date"><input type="date" style={inputCls} value={d.purchaseDate || ''} onChange={(e) => setD({ ...d, purchaseDate: e.target.value })} /></FormGroup>
          <FormGroup label="Their invoice / ref #"><input style={inputCls} value={d.invoiceRef || ''} onChange={(e) => setD({ ...d, invoiceRef: e.target.value })} placeholder="Optional" /></FormGroup>
        </div>
        <FormGroup label="Budget bucket">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            {[
              { id: 'silk', label: '🌹 Silk', color: '#C56B5C' },
              { id: 'fresh', label: '💐 Fresh', color: '#7A9B76' },
              { id: 'general', label: '🔹 General', color: '#7A7A8C' },
            ].map(b => (
              <button key={b.id} type="button" onClick={() => setD({ ...d, bucket: b.id })}
                style={{ padding: 10, borderRadius: 8, border: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer',
                  background: (d.bucket || 'fresh') === b.id ? b.color : T.card, color: (d.bucket || 'fresh') === b.id ? '#fff' : T.textSecondary }}>
                {b.label}
              </button>
            ))}
          </div>
        </FormGroup>
        <div style={{ marginTop: 18, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>What you bought</h3>
          <button type="button" onClick={addItem} style={{ background: T.accent, color: '#fff', border: 'none', borderRadius: 8, padding: '7px 11px', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Plus size={13} strokeWidth={2.5} /> Add
          </button>
        </div>
        {(!d.items || d.items.length === 0) ? (
          <div style={{ padding: 18, textAlign: 'center', color: T.textTertiary, fontSize: 13, background: T.card, borderRadius: 10 }}>Optional — add line items, or just enter the total below</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.items.map((it, idx) => (
              <div key={it.id || idx} style={{ background: T.card, padding: 12, borderRadius: 10, border: `0.5px solid ${T.separatorOpaque}` }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                  <input style={{ ...inputCls, padding: '8px 10px', fontSize: 13, flex: 1 }} value={it.name || ''} onChange={(e) => updateItem(idx, { name: e.target.value })} placeholder="e.g. Pink peonies, 25 stems" />
                  <button type="button" onClick={() => removeItem(idx)} style={{ background: 'transparent', border: 'none', color: T.red, padding: 6 }}><Trash2 size={15} /></button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
                  <NumField label="Qty" value={it.qty} onChange={(v) => updateItem(idx, { qty: v })} />
                  <NumField label="Unit £" value={it.price} onChange={(v) => updateItem(idx, { price: v })} step="0.01" />
                  <div>
                    <label style={{ display: 'block', fontSize: 10, color: T.textTertiary, marginBottom: 3, fontWeight: 600, letterSpacing: '0.3px', textTransform: 'uppercase' }}>Line £</label>
                    <div style={{ padding: '7px 8px', background: T.bgGrouped, border: `0.5px solid ${T.separator}`, borderRadius: 7, fontSize: 13, fontWeight: 600 }}>
                      £{((parseFloat(it.price) || 0) * (parseFloat(it.qty) || 0)).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {itemsTotal > 0 && (
              <button type="button" onClick={useItemsTotal} style={{ background: 'transparent', color: T.accent, border: `0.5px dashed ${T.accent}`, borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 600, marginTop: 4 }}>
                Use items total: £{itemsTotal.toFixed(2)}
              </button>
            )}
          </div>
        )}
        <FormGroup label="Total paid (£) *" hint="The total invoice amount">
          <input type="number" step="0.01" style={inputCls} value={d.total || ''} onChange={(e) => setD({ ...d, total: e.target.value })} placeholder={itemsTotal > 0 ? itemsTotal.toFixed(2) : '0.00'} />
        </FormGroup>
        <div style={{ background: T.card, padding: 14, borderRadius: 10, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: d.paid ? 12 : 0 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Payment status</div>
              <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 2 }}>Have you paid this invoice?</div>
            </div>
            <button type="button" onClick={() => setD({ ...d, paid: !d.paid, paidDate: !d.paid ? new Date().toISOString().slice(0, 10) : '' })}
              style={{ padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, background: d.paid ? T.sage : T.bgGrouped, color: d.paid ? '#fff' : T.textSecondary, border: 'none' }}>
              {d.paid ? '✓ Paid' : 'Unpaid'}
            </button>
          </div>
          {d.paid && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <FormGroup label="When paid"><input type="date" style={inputCls} value={d.paidDate || ''} onChange={(e) => setD({ ...d, paidDate: e.target.value })} /></FormGroup>
              <FormGroup label="How paid">
                <select style={inputCls} value={d.paidMethod || ''} onChange={(e) => setD({ ...d, paidMethod: e.target.value })}>
                  <option value="">— Choose —</option><option value="Cash">Cash</option><option value="Bank transfer">Bank transfer</option><option value="Card">Card</option><option value="Cheque">Cheque</option><option value="PayPal">PayPal</option><option value="Other">Other</option>
                </select>
              </FormGroup>
            </div>
          )}
        </div>
        <FormGroup label="Notes" hint="Quality notes, delivery issues, anything to remember"><textarea rows={3} style={inputCls} value={d.notes || ''} onChange={(e) => setD({ ...d, notes: e.target.value })} placeholder="e.g. Roses arrived a bit short. Asked for replacement." /></FormGroup>
      </div>
    </Modal>
  );
}

// ============== PURCHASES TAB ==============

function PurchasesTab({ suppliers, purchases, search, setSearch, onAddSupplier, onEditSupplier, onDeleteSupplier, onAddPurchase, onEditPurchase, onDeletePurchase, onTogglePaid }) {
  const [view, setView] = useState('purchases');
  const filteredPurchases = purchases
    .filter(p => {
      if (!search) return true;
      const sup = suppliers.find(s => s.id === p.supplierId);
      return p.invoiceRef?.toLowerCase().includes(search.toLowerCase())
        || sup?.name?.toLowerCase().includes(search.toLowerCase())
        || (p.items || []).some(it => it.name?.toLowerCase().includes(search.toLowerCase()));
    })
    .sort((a, b) => new Date(b.purchaseDate || b.createdAt) - new Date(a.purchaseDate || a.createdAt));
  const filteredSuppliers = suppliers.filter(s => !search || s.name?.toLowerCase().includes(search.toLowerCase()) || s.contactName?.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="anim-fade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 4, marginTop: 8 }}>
        <div>
          <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 400, margin: '0 0 4px', letterSpacing: '0.5px', color: T.text }}>Purchases</h1>
          <p style={{ color: T.textTertiary, margin: 0, fontSize: 15 }}>What you bought, from whom</p>
        </div>
        <button onClick={view === 'purchases' ? onAddPurchase : onAddSupplier}
          style={{ background: T.accent, color: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
          <Plus size={15} strokeWidth={2.5} /> {view === 'purchases' ? 'Buy' : 'Supplier'}
        </button>
      </div>
      <div style={{ display: 'flex', background: 'rgba(120,120,128,0.12)', borderRadius: 9, padding: 2, margin: '16px 0' }}>
        {[{ id: 'purchases', label: 'Purchases', icon: ShoppingCart }, { id: 'suppliers', label: 'Suppliers', icon: Truck }].map(t => {
          const Icon = t.icon; const active = view === t.id;
          return (
            <button key={t.id} onClick={() => setView(t.id)} style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '8px 10px', borderRadius: 7, border: 'none',
              background: active ? T.card : 'transparent', color: active ? T.text : T.textSecondary,
              fontSize: 13, fontWeight: 600,
              boxShadow: active ? '0 3px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)' : 'none',
            }}><Icon size={14} strokeWidth={2.2} /> {t.label}</button>
          );
        })}
      </div>
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: T.textTertiary }} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={view === 'purchases' ? 'Search purchases...' : 'Search suppliers...'}
          style={{ width: '100%', padding: '11px 12px 11px 36px', background: 'rgba(120,120,128,0.12)', border: '1px solid transparent', borderRadius: 10, fontSize: 15, color: T.text, boxSizing: 'border-box' }} />
      </div>
      {view === 'purchases' && (
        filteredPurchases.length === 0 ? (
          <div className="ios-card" style={{ padding: 40, textAlign: 'center', color: T.textTertiary, fontSize: 14 }}>
            {suppliers.length === 0 ? 'Add a supplier first, then record your purchases.' : 'No purchases yet. Tap "Buy" to record one.'}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {filteredPurchases.map(p => {
              const sup = suppliers.find(s => s.id === p.supplierId);
              const items = p.items || [];
              const itemSummary = items.length === 0 ? 'No items' : items.length === 1 ? items[0].name : `${items.length} items`;
              return (
                <div key={p.id} className="ios-card" style={{ padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 17, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sup?.name || 'Unknown supplier'}</div>
                      <div style={{ fontSize: 13, color: T.textTertiary, marginTop: 2 }}>{p.purchaseDate || '—'} · {itemSummary}{p.invoiceRef && ` · Ref: ${p.invoiceRef}`}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 17, fontWeight: 700 }}>£{(parseFloat(p.total) || 0).toFixed(2)}</div>
                      <PaidBadge paid={p.paid} />
                    </div>
                  </div>
                  {items.length > 0 && (
                    <div style={{ background: T.bg, padding: 10, borderRadius: 8, marginBottom: 10 }}>
                      {items.map((it, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '3px 0', color: T.textSecondary }}>
                          <span>{it.qty || 1}× {it.name}</span>
                          <span style={{ color: T.text }}>£{((parseFloat(it.price) || 0) * (parseFloat(it.qty) || 0)).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {p.notes && <div style={{ fontSize: 12, color: T.textTertiary, fontStyle: 'italic', marginBottom: 10, padding: '6px 10px', background: T.bgGrouped, borderRadius: 6 }}>{p.notes}</div>}
                  {p.paid && p.paidDate && <div style={{ fontSize: 12, color: T.sage, marginBottom: 10 }}>Paid on {p.paidDate}{p.paidMethod ? ` · ${p.paidMethod}` : ''}</div>}
                  <div style={{ display: 'flex', gap: 8, paddingTop: 10, borderTop: `0.5px solid ${T.separator}` }}>
                    <button onClick={() => onTogglePaid(p)} style={{
                      flex: 1, padding: '8px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                      background: p.paid ? T.card : T.sage, color: p.paid ? T.textSecondary : '#fff',
                      border: p.paid ? `0.5px solid ${T.separatorOpaque}` : 'none',
                    }}>{p.paid ? 'Mark unpaid' : '✓ Mark as paid'}</button>
                    <button onClick={() => onEditPurchase(p)} style={{ padding: '8px 12px', background: T.card, color: T.accent, border: `0.5px solid ${T.separatorOpaque}`, borderRadius: 8, fontSize: 13, fontWeight: 600 }}><Edit3 size={13} /></button>
                    <button onClick={() => onDeletePurchase(p.id)} style={{ padding: '8px 12px', background: T.card, color: T.red, border: `0.5px solid ${T.separatorOpaque}`, borderRadius: 8, fontSize: 13, fontWeight: 600 }}><Trash2 size={13} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
      {view === 'suppliers' && (
        filteredSuppliers.length === 0 ? (
          <div className="ios-card" style={{ padding: 40, textAlign: 'center', color: T.textTertiary, fontSize: 14 }}>No suppliers yet. Tap "Supplier" to add one.</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
            {filteredSuppliers.map(s => {
              const supPurchases = purchases.filter(p => p.supplierId === s.id);
              const totalSpent = supPurchases.reduce((sum, p) => sum + (parseFloat(p.total) || 0), 0);
              const owed = supPurchases.filter(p => !p.paid).reduce((sum, p) => sum + (parseFloat(p.total) || 0), 0);
              return (
                <div key={s.id} className="ios-card" style={{ padding: 16, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 2 }}>
                    <button onClick={() => onEditSupplier(s)} style={{ padding: 6, background: 'transparent', border: 'none', color: T.textTertiary, borderRadius: 6 }}><Edit3 size={14} /></button>
                    <button onClick={() => onDeleteSupplier(s.id)} style={{ padding: 6, background: 'transparent', border: 'none', color: T.textTertiary, borderRadius: 6 }}><Trash2 size={14} /></button>
                  </div>
                  <div style={{ paddingRight: 50 }}>
                    <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 3 }}>{s.name}</div>
                    {s.contactName && <div style={{ fontSize: 14, color: T.textSecondary, marginBottom: 2 }}>{s.contactName}</div>}
                    <div style={{ marginTop: 10, paddingTop: 10, borderTop: `0.5px solid ${T.separator}`, display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {s.phone && <Detail icon={Phone}>{s.phone}</Detail>}
                      {s.email && <Detail icon={Mail}>{s.email}</Detail>}
                      {s.address && <Detail icon={MapPin}>{s.address}</Detail>}
                    </div>
                    <div style={{ marginTop: 10, paddingTop: 10, borderTop: `0.5px solid ${T.separator}`, display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <div>
                        <div style={{ color: T.textTertiary, fontSize: 11, fontWeight: 600, letterSpacing: '0.4px', textTransform: 'uppercase' }}>Total spent</div>
                        <div style={{ fontWeight: 700 }}>£{totalSpent.toFixed(2)}</div>
                      </div>
                      {owed > 0 && (
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ color: T.amber, fontSize: 11, fontWeight: 600, letterSpacing: '0.4px', textTransform: 'uppercase' }}>You owe</div>
                          <div style={{ fontWeight: 700, color: T.amber }}>£{owed.toFixed(2)}</div>
                        </div>
                      )}
                    </div>
                    {s.notes && <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 8, paddingTop: 8, borderTop: `0.5px solid ${T.separator}`, fontStyle: 'italic' }}>{s.notes}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

// ============== INVESTOR TAB - Track loans from David & repayments ==============

function InvestorTab({ investments, purchases, loanSilk, loanFresh, loanAll, spentSilk, spentFresh, budgetSilk, budgetFresh, onAdd, onEdit, onDelete }) {
  const formatGBP = (n) => '£' + (n || 0).toFixed(2);
  const sortedInv = [...investments].sort((a, b) => new Date(b.date) - new Date(a.date));

  const BucketCard = ({ title, emoji, lent, repaid, owed, spent, budget }) => (
    <div style={{ background: T.card, borderRadius: 14, padding: 16, marginBottom: 12, border: `1px solid ${T.separator}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>{emoji}</span>
        <h3 style={{ margin: 0, fontFamily: SERIF, fontSize: 18, fontWeight: 400, color: T.text }}>{title}</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: T.bg, padding: 10, borderRadius: 8 }}>
          <div style={{ fontSize: 11, color: T.textTertiary, letterSpacing: '0.5px', marginBottom: 2 }}>LENT</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.text }}>{formatGBP(lent)}</div>
        </div>
        <div style={{ background: T.bg, padding: 10, borderRadius: 8 }}>
          <div style={{ fontSize: 11, color: T.textTertiary, letterSpacing: '0.5px', marginBottom: 2 }}>REPAID</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.sage }}>{formatGBP(repaid)}</div>
        </div>
        <div style={{ background: owed > 0 ? T.amberBg : T.sageBg, padding: 10, borderRadius: 8 }}>
          <div style={{ fontSize: 11, color: T.textTertiary, letterSpacing: '0.5px', marginBottom: 2 }}>STILL OWED</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: owed > 0 ? T.amber : T.sage }}>{formatGBP(owed)}</div>
        </div>
        <div style={{ background: budget < 0 ? T.redBg : T.bg, padding: 10, borderRadius: 8 }}>
          <div style={{ fontSize: 11, color: T.textTertiary, letterSpacing: '0.5px', marginBottom: 2 }}>SPENT / BUDGET</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: budget < 0 ? T.red : T.text }}>
            {formatGBP(spent)} / {formatGBP(lent)}
          </div>
          {budget < 0 && <div style={{ fontSize: 11, color: T.red, fontWeight: 600, marginTop: 2 }}>⚠️ Over by {formatGBP(-budget)}</div>}
          {budget >= 0 && lent > 0 && <div style={{ fontSize: 11, color: T.textSecondary, marginTop: 2 }}>{formatGBP(budget)} left</div>}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <SectionHeader title="Investor" />
      <p style={{ color: T.textSecondary, margin: '0 0 16px', fontSize: 14 }}>Track money David lent and repayments.</p>

      {/* TOTAL CARD */}
      <div style={{ background: loanAll.owed > 0 ? T.amber : T.sage, borderRadius: 14, padding: 18, marginBottom: 16, color: '#fff' }}>
        <div style={{ fontSize: 12, opacity: 0.85, letterSpacing: '1px', marginBottom: 4 }}>MIRIAM OWES DAVID</div>
        <div style={{ fontSize: 36, fontWeight: 700, fontFamily: SERIF, letterSpacing: '0.5px' }}>{formatGBP(loanAll.owed)}</div>
        <div style={{ fontSize: 12, opacity: 0.9, marginTop: 6 }}>
          Lent: {formatGBP(loanAll.lent)} · Paid back: {formatGBP(loanAll.repaid)}
        </div>
      </div>

      {/* PER-BUCKET CARDS */}
      <BucketCard title="Silk Flowers" emoji="🌹" lent={loanSilk.lent} repaid={loanSilk.repaid} owed={loanSilk.owed} spent={spentSilk} budget={budgetSilk} />
      <BucketCard title="Fresh Flowers" emoji="💐" lent={loanFresh.lent} repaid={loanFresh.repaid} owed={loanFresh.owed} spent={spentFresh} budget={budgetFresh} />

      {/* ACTIONS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
        <button onClick={() => onAdd('loan')} style={{ padding: 14, background: T.accent, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Plus size={16} /> Loan (David gave)
        </button>
        <button onClick={() => onAdd('repayment')} style={{ padding: 14, background: T.sage, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Plus size={16} /> Repayment (paid back)
        </button>
      </div>

      {/* HISTORY */}
      <h3 style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 400, margin: '6px 0 10px' }}>History</h3>
      {sortedInv.length === 0 ? (
        <div style={{ padding: 24, textAlign: 'center', background: T.card, borderRadius: 12, color: T.textSecondary, fontSize: 14 }}>
          No transactions yet. Tap "Loan" when David gives money, "Repayment" when Miriam pays back.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {sortedInv.map(inv => {
            const isLoan = inv.type === 'loan';
            const bucketLabel = inv.bucket === 'silk' ? '🌹 Silk' : inv.bucket === 'fresh' ? '💐 Fresh' : '🔹 General';
            return (
              <div key={inv.id} style={{ background: T.card, borderRadius: 12, padding: 14, border: `1px solid ${T.separator}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{
                        padding: '2px 8px', borderRadius: 6, fontSize: 11, fontWeight: 700,
                        background: isLoan ? T.amberBg : T.sageBg,
                        color: isLoan ? T.amber : T.sage,
                      }}>{isLoan ? 'LOAN' : 'REPAYMENT'}</span>
                      <span style={{ fontSize: 12, color: T.textSecondary }}>{bucketLabel}</span>
                    </div>
                    <div style={{ fontSize: 13, color: T.textSecondary }}>
                      {inv.date ? new Date(inv.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
                    </div>
                    {inv.note && <div style={{ fontSize: 13, color: T.textSecondary, marginTop: 4, fontStyle: 'italic' }}>{inv.note}</div>}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 19, fontWeight: 700, color: isLoan ? T.amber : T.sage, fontFamily: SERIF }}>
                      {isLoan ? '+' : '−'}{formatGBP(parseFloat(inv.amount) || 0)}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 10, justifyContent: 'flex-end' }}>
                  <button onClick={() => onEdit(inv)} style={{ padding: '7px 10px', background: 'transparent', border: `1px solid ${T.separator}`, color: T.textSecondary, borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Edit3 size={12} /> Edit
                  </button>
                  <button onClick={() => onDelete(inv.id)} style={{ padding: '7px 10px', background: 'transparent', border: `1px solid ${T.separator}`, color: T.red, borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============== INVESTMENT FORM (loan or repayment) ==============

function InvestmentForm({ initial, onSave, onClose }) {
  const today = new Date().toISOString().slice(0, 10);
  const [d, setD] = useState({
    id: initial?.id || null,
    type: initial?.type || 'loan',
    amount: initial?.amount || '',
    bucket: initial?.bucket || 'fresh',
    date: initial?.date || today,
    note: initial?.note || '',
    createdAt: initial?.createdAt,
  });

  const isLoan = d.type === 'loan';

  const submit = () => {
    if (!d.amount || parseFloat(d.amount) <= 0) {
      alert('Enter an amount greater than 0');
      return;
    }
    onSave(d);
  };

  return (
    <Modal onClose={onClose} title={isLoan ? '💰 New loan (David gave)' : '💸 Repayment (paid back)'}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* TYPE TOGGLE */}
        <FormGroup label="Type">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <button onClick={() => setD({ ...d, type: 'loan' })}
              style={{ padding: 12, borderRadius: 10, border: 'none', fontSize: 14, fontWeight: 700, cursor: 'pointer',
                background: d.type === 'loan' ? T.amber : T.card, color: d.type === 'loan' ? '#fff' : T.textSecondary }}>
              💰 Loan (gave)
            </button>
            <button onClick={() => setD({ ...d, type: 'repayment' })}
              style={{ padding: 12, borderRadius: 10, border: 'none', fontSize: 14, fontWeight: 700, cursor: 'pointer',
                background: d.type === 'repayment' ? T.sage : T.card, color: d.type === 'repayment' ? '#fff' : T.textSecondary }}>
              💸 Repaid
            </button>
          </div>
        </FormGroup>

        <FormGroup label="Amount (£)">
          <input type="number" inputMode="decimal" step="0.01" value={d.amount}
            onChange={(e) => setD({ ...d, amount: e.target.value })}
            placeholder="0.00"
            style={{ width: '100%', padding: 12, border: `1px solid ${T.separator}`, borderRadius: 10, fontSize: 18, fontWeight: 600, background: T.bg, color: T.text, boxSizing: 'border-box' }}
            autoFocus />
        </FormGroup>

        <FormGroup label="Bucket (for budget tracking)">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            {[
              { id: 'silk', label: '🌹 Silk', color: '#C56B5C' },
              { id: 'fresh', label: '💐 Fresh', color: '#7A9B76' },
              { id: 'general', label: '🔹 General', color: '#7A7A8C' },
            ].map(b => (
              <button key={b.id} onClick={() => setD({ ...d, bucket: b.id })}
                style={{ padding: 10, borderRadius: 8, border: 'none', fontSize: 12, fontWeight: 700, cursor: 'pointer',
                  background: d.bucket === b.id ? b.color : T.card, color: d.bucket === b.id ? '#fff' : T.textSecondary }}>
                {b.label}
              </button>
            ))}
          </div>
        </FormGroup>

        <FormGroup label="Date">
          <input type="date" value={d.date}
            onChange={(e) => setD({ ...d, date: e.target.value })}
            style={{ width: '100%', padding: 12, border: `1px solid ${T.separator}`, borderRadius: 10, fontSize: 15, background: T.bg, color: T.text, boxSizing: 'border-box' }} />
        </FormGroup>

        <FormGroup label="Notes (optional)">
          <textarea value={d.note}
            onChange={(e) => setD({ ...d, note: e.target.value })}
            placeholder="e.g. for fresh flower restock"
            rows={2}
            style={{ width: '100%', padding: 12, border: `1px solid ${T.separator}`, borderRadius: 10, fontSize: 14, background: T.bg, color: T.text, boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit' }} />
        </FormGroup>

        <SaveBtn onClick={submit} label={isLoan ? 'Save loan' : 'Save repayment'} />
      </div>
    </Modal>
  );
}

// ============== INVOICE VIEW - rebuilt PDF/Print system ==============

function InvoiceView({ consign, shop, calc, onClose, onEdit, onUpdate, onDelete, onSendReminder }) {
  const m = calc(consign);
  const [showPrintView, setShowPrintView] = useState(false);

  const handleOpenPrintView = () => setShowPrintView(true);
  const updateStatus = async (newStatus) => { await onUpdate({ ...consign, status: newStatus }); };

  // Email invoice to shop directly
  const handleEmailInvoice = () => {
    if (!shop?.email) {
      alert(`No email on file for ${shop?.name || 'this shop'}.\n\nAdd an email in shop details to enable direct sending.`);
      return;
    }
    const subject = `Invoice ${consign.invoiceNumber} from Misty Blooms`;
    const dueDate = consign.deliveryDate
      ? new Date(new Date(consign.deliveryDate).getTime() + 7*24*60*60*1000).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      : '';

    // Build a nicely formatted invoice body
    const lines = [];
    lines.push(`Hi ${shop.contactName || shop.name},`);
    lines.push('');
    lines.push(`Please find the details of invoice ${consign.invoiceNumber} below.`);
    lines.push('');
    lines.push('═══════════════════════════════════');
    lines.push('       MISTY BLOOMS · FLORIST');
    lines.push('═══════════════════════════════════');
    lines.push('');
    lines.push(`INVOICE №  ${consign.invoiceNumber}`);
    lines.push(`Date:     ${consign.deliveryDate || ''}`);
    if (dueDate) lines.push(`Due by:   ${dueDate}`);
    lines.push('');
    lines.push('───────────────────────────────────');
    lines.push('ITEMS');
    lines.push('───────────────────────────────────');
    (consign.items || []).forEach(it => {
      const sold = parseInt(it.soldQty) || 0;
      const price = parseFloat(it.price) || 0;
      const total = price * sold;
      lines.push(`${it.name || '(no name)'}`);
      lines.push(`  Sold: ${sold} × £${price.toFixed(2)}  =  £${total.toFixed(2)}`);
    });
    lines.push('');
    lines.push('───────────────────────────────────');
    lines.push(`Sold value:                £${m.sold.toFixed(2)}`);
    lines.push(`Less commission (${m.commissionRate}%):    -£${m.shopShare.toFixed(2)}`);
    lines.push('───────────────────────────────────');
    lines.push(`AMOUNT DUE:                £${m.owedToYou.toFixed(2)}`);
    lines.push('═══════════════════════════════════');
    lines.push('');
    lines.push('PAYMENT DETAILS');
    lines.push('  Account name:  Miriam Subtee');
    lines.push('  Sort code:     09-01-28');
    lines.push('  Account no:    49637279');
    lines.push(`  Reference:     ${consign.invoiceNumber}`);
    lines.push('');
    lines.push('Payment due within 7 days. Thank you so much!');
    lines.push('');
    lines.push('Misty Blooms 🌷');

    const body = lines.join('\n');
    const mailtoUrl = `mailto:${encodeURIComponent(shop.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.location.href = mailtoUrl;
    } catch (e) {
      // Fallback via link
      try {
        const a = document.createElement('a');
        a.href = mailtoUrl;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (e2) {
        alert('Could not open your email app.');
      }
    }
  };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 110, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <div className="anim-slide" onClick={(e) => e.stopPropagation()} style={{ background: T.bgGrouped, borderRadius: '14px 14px 0 0', width: '100%', maxWidth: 720, maxHeight: '94vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', borderBottom: `0.5px solid ${T.separator}` }}>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: T.accent, fontSize: 16, fontWeight: 500, padding: 4 }}>Close</button>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Invoice</h2>
          <button onClick={onEdit} style={{ background: 'transparent', border: 'none', color: T.accent, fontSize: 15, fontWeight: 600, padding: 4 }}>Edit</button>
        </div>

        <div style={{ overflowY: 'auto', padding: 16, flex: 1 }}>
          {/* PREVIEW CARD */}
          <div style={{ background: T.bg, borderRadius: 10, padding: 28, marginBottom: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.04)', border: `1px solid ${T.separatorOpaque}`, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05, pointerEvents: 'none', width: '70%', maxWidth: 400, zIndex: 0 }}>
              <MistyBloomsLogo size={400} variant="mark" />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ textAlign: 'center', marginBottom: 18 }}>
                <div style={{ display: 'inline-block' }}><MistyBloomsLogo size={160} variant="mark" /></div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '12px 0 6px' }}>
                  <div style={{ width: 60, height: 1, background: T.textSecondary }}></div>
                  <span style={{ fontFamily: SERIF, color: T.textSecondary, fontStyle: 'italic', fontSize: 14 }}>∽</span>
                  <div style={{ width: 60, height: 1, background: T.textSecondary }}></div>
                </div>
                <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 400, color: T.text, letterSpacing: '5px', textTransform: 'uppercase', margin: '10px 0 4px' }}>Invoice</div>
                <div style={{ fontSize: 11, color: T.textSecondary, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>№ {consign.invoiceNumber}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 22, padding: 16, background: T.card, borderRadius: 8, border: `1px solid ${T.separatorOpaque}` }}>
                <div>
                  <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 11, color: T.textTertiary, fontWeight: 400, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 6 }}>Billed to</div>
                  <div style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 400, color: T.text }}>{shop?.name || 'Unknown'}</div>
                  {shop?.contactName && <div style={{ fontSize: 13, color: T.textSecondary, marginTop: 2 }}>{shop.contactName}</div>}
                  {shop?.address && <div style={{ fontSize: 13, color: T.textSecondary, marginTop: 1, whiteSpace: 'pre-line' }}>{shop.address}</div>}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 11, color: T.textTertiary, fontWeight: 400, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 6 }}>Invoice date</div>
                  <div style={{ fontSize: 14, color: T.text, fontWeight: 500 }}>{consign.deliveryDate || '—'}</div>
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 50px 50px 60px 80px 80px', gap: 8, padding: '8px 0', borderBottom: `1px solid ${T.separatorOpaque}`, fontSize: 10, fontWeight: 600, color: T.textTertiary, letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                  <div>Item</div><div style={{ textAlign: 'center' }}>Qty</div><div style={{ textAlign: 'center' }}>Sold</div><div style={{ textAlign: 'center' }}>Ret'd</div><div style={{ textAlign: 'right' }}>Price</div><div style={{ textAlign: 'right' }}>Sold £</div>
                </div>
                {(consign.items || []).map((it, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 50px 50px 60px 80px 80px', gap: 8, padding: '10px 0', borderBottom: `0.5px solid ${T.separator}`, fontSize: 13 }}>
                    <div style={{ color: T.text }}>{it.name}</div>
                    <div style={{ textAlign: 'center', color: T.textSecondary }}>{it.qty || 0}</div>
                    <div style={{ textAlign: 'center', color: T.sage, fontWeight: 600 }}>{it.soldQty || 0}</div>
                    <div style={{ textAlign: 'center', color: T.textSecondary }}>{it.returnedQty || 0}</div>
                    <div style={{ textAlign: 'right', color: T.textSecondary }}>£{parseFloat(it.price || 0).toFixed(2)}</div>
                    <div style={{ textAlign: 'right', color: T.text, fontWeight: 600 }}>£{((parseFloat(it.price) || 0) * (parseInt(it.soldQty) || 0)).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: T.bg, padding: 16, borderRadius: 8, marginBottom: 14 }}>
                <Row label="Total delivered" value={`£${m.subtotal.toFixed(2)}`} />
                <Row label="Sold" value={`£${m.sold.toFixed(2)}`} />
                <Row label="Returned" value={`£${m.returnedValue.toFixed(2)}`} />
                <Row label={`Shop commission (${m.commissionRate}%)`} value={`-£${m.shopShare.toFixed(2)}`} />
                <div style={{ height: 1, background: T.separatorOpaque, margin: '10px 0' }} />
                <Row label="Amount due to Misty Blooms" value={`£${m.owedToYou.toFixed(2)}`} bold />
              </div>
            </div>
          </div>

          {/* STATUS */}
          <div className="ios-card" style={{ padding: 14, marginBottom: 12 }}>
            <div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 600, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 8 }}>Status</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {[{ id: 'active', label: 'Active' }, { id: 'pending-settlement', label: 'Settling' }, { id: 'paid', label: 'Paid' }, { id: 'cancelled', label: 'Cancelled' }].map(s => (
                <button key={s.id} onClick={() => updateStatus(s.id)} style={{
                  padding: '7px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: consign.status === s.id ? T.accent : T.card,
                  color: consign.status === s.id ? '#fff' : T.text,
                  border: `0.5px solid ${consign.status === s.id ? T.accent : T.separatorOpaque}`,
                }}>{s.label}</button>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          {consign.status !== 'paid' && consign.status !== 'cancelled' && onSendReminder && (
            <button onClick={onSendReminder} style={{ width: '100%', padding: '13px', background: T.amber, color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              💬 Send payment reminder
            </button>
          )}

          {/* Email — primary action when shop has email */}
          {shop?.email && (
            <button onClick={handleEmailInvoice} style={{ width: '100%', padding: '14px', background: T.sage, color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <Mail size={16} strokeWidth={2.2} /> Email invoice to {shop.name}
            </button>
          )}

          <button onClick={handleOpenPrintView} style={{ width: '100%', padding: '14px', background: T.accent, color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Printer size={16} strokeWidth={2.2} /> Open invoice (image / print / PDF)
          </button>

          {!shop?.email && (
            <div style={{ fontSize: 11, color: T.textTertiary, textAlign: 'center', padding: '6px 8px 4px', lineHeight: 1.5, fontStyle: 'italic' }}>
              💡 Add an email to {shop?.name || 'the shop'} to send invoices directly
            </div>
          )}

          <button onClick={onDelete} style={{ width: '100%', padding: '12px', background: T.card, color: T.red, border: `0.5px solid ${T.separatorOpaque}`, borderRadius: 10, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <Trash2 size={14} /> Delete invoice
          </button>
          <div style={{ fontSize: 11, color: T.textTertiary, textAlign: 'center', padding: '10px 8px 0', lineHeight: 1.5 }}>
            {shop?.email ? '📧 Email opens your mail app with everything filled in' : 'Open invoice → save as image → send via WhatsApp/email'}
          </div>
        </div>
      </div>

      {showPrintView && <PrintableInvoice consign={consign} shop={shop} m={m} onClose={() => setShowPrintView(false)} />}
    </div>
  );
}

// ============== PRINTABLE INVOICE - rock-solid PDF system ==============
// Strategy: render the invoice in an iframe with the SAME viewbox as the user sees on screen,
// then offer multiple ways out: native browser print (best), download as HTML, copy URL, etc.
// Built to survive every sandbox environment.

function PrintableInvoice({ consign, shop, m, onClose }) {
  const iframeRef = useRef(null);
  const [iframeReady, setIframeReady] = useState(false);
  const [actionMsg, setActionMsg] = useState(null);
  const html = buildInvoiceHTML(consign, shop, m);

  useEffect(() => {
    if (iframeRef.current) {
      try {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(html);
          doc.close();
          setTimeout(() => setIframeReady(true), 300);
        }
      } catch (e) {
        console.warn('iframe write failed:', e);
        setIframeReady(true);
      }
    }
  }, [html]);

  const showMsg = (type, msg) => {
    setActionMsg({ type, msg });
    setTimeout(() => setActionMsg(null), 4000);
  };

  // Build plain text version of invoice — used for Copy and Email
  const buildPlainText = () => {
    const lines = [];
    lines.push('=== MISTY BLOOMS - FLORIST ===');
    lines.push('');
    lines.push(`INVOICE No. ${consign.invoiceNumber}`);
    lines.push(`Date:    ${consign.deliveryDate || new Date().toISOString().slice(0,10)}`);
    lines.push('');
    lines.push('BILLED TO');
    lines.push(`  ${shop?.name || 'Unknown'}`);
    if (shop?.contactName) lines.push(`  ${shop.contactName}`);
    if (shop?.address) shop.address.split('\n').forEach(l => lines.push(`  ${l}`));
    if (shop?.phone) lines.push(`  ${shop.phone}`);
    if (shop?.email) lines.push(`  ${shop.email}`);
    lines.push('');
    lines.push('--- ITEMS ---');
    (consign.items || []).forEach(it => {
      const qty = parseInt(it.qty) || 0;
      const sold = parseInt(it.soldQty) || 0;
      const ret = parseInt(it.returnedQty) || 0;
      const price = parseFloat(it.price) || 0;
      const total = price * sold;
      lines.push(`${it.name || '(no name)'}`);
      lines.push(`  Delivered: ${qty}  Sold: ${sold}  Returned: ${ret}`);
      lines.push(`  Price: GBP ${price.toFixed(2)} each  =  GBP ${total.toFixed(2)}`);
      lines.push('');
    });
    lines.push('-----------------------------------');
    lines.push(`Total delivered:     GBP ${m.subtotal.toFixed(2)}`);
    lines.push(`Sold value:          GBP ${m.sold.toFixed(2)}`);
    lines.push(`Returned:            GBP ${m.returnedValue.toFixed(2)}`);
    lines.push(`Shop commission ${m.commissionRate}%: GBP ${m.shopShare.toFixed(2)}`);
    lines.push('-----------------------------------');
    lines.push(`AMOUNT DUE:          GBP ${m.owedToYou.toFixed(2)}`);
    lines.push('===================================');
    lines.push('');
    lines.push('PAYMENT DETAILS');
    lines.push('  Account name:  Miriam Subtee');
    lines.push('  Sort code:     09-01-28');
    lines.push('  Account no:    49637279');
    lines.push(`  Reference:     ${consign.invoiceNumber}`);
    lines.push('');
    lines.push('Payment due within 7 days. Thank you!');
    lines.push('Misty Blooms');
    return lines.join('\n');
  };

  // Copy invoice as text to clipboard
  const handleCopy = () => {
    const text = buildPlainText();
    try {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(
          () => showMsg('success', 'Copied! Paste in WhatsApp/Notes/Email'),
          () => showMsg('error', 'Copy failed - try the textarea below')
        );
        return;
      }
    } catch (e) {}
    // Fallback: select text in a textarea
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showMsg('success', 'Copied!');
    } catch (e) {
      showMsg('error', 'Copy not available');
    }
  };

  // Open email app with invoice pre-filled
  const handleEmail = () => {
    if (!shop?.email) {
      showMsg('error', 'No email on file for this shop');
      return;
    }
    const subject = `Invoice ${consign.invoiceNumber} from Misty Blooms`;
    const body = buildPlainText();
    const mailtoUrl = `mailto:${encodeURIComponent(shop.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.location.href = mailtoUrl;
      showMsg('success', `Opening email to ${shop.email}...`);
    } catch (e) {
      try {
        const a = document.createElement('a');
        a.href = mailtoUrl;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showMsg('success', 'Opening email...');
      } catch (e2) {
        showMsg('error', 'Could not open email app');
      }
    }
  };

  // Try to print the iframe
  const handlePrint = () => {
    try {
      iframeRef.current?.contentWindow?.focus();
      iframeRef.current?.contentWindow?.print();
      showMsg('success', 'Opening print dialog...');
    } catch (e) {
      showMsg('error', 'Print not available here. Use Copy or Email');
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 200, display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: T.bg, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.separator}`, gap: 8 }}>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: T.accent, fontSize: 16, fontWeight: 600, padding: 4, cursor: 'pointer' }}>← Back</button>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: T.text, letterSpacing: '1px', flex: 1, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{consign.invoiceNumber}</div>
        <div style={{ width: 40 }}></div>
      </div>

      {actionMsg && (
        <div style={{
          position: 'absolute', top: 70, left: '50%', transform: 'translateX(-50%)',
          background: actionMsg.type === 'success' ? T.sage : T.red,
          color: '#fff', padding: '10px 18px', borderRadius: 10, fontSize: 13, fontWeight: 600,
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)', zIndex: 10, maxWidth: '85%', textAlign: 'center',
        }}>
          {actionMsg.msg}
        </div>
      )}

      <iframe ref={iframeRef} style={{ flex: 1, width: '100%', border: 'none', background: '#fff' }} title="Invoice preview" />

      <div style={{ background: T.accentDeep, color: '#fff', padding: '12px 14px' }}>
        {shop?.email && (
          <button onClick={handleEmail} style={{ width: '100%', padding: '14px', background: T.gold, color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', marginBottom: 8 }}>
            <Mail size={18} />
            <span>Email to {shop.name}</span>
          </button>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
          <button onClick={handleCopy} style={{ padding: '12px 8px', background: T.sage, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
            <Copy size={14} />
            <span>Copy as text</span>
          </button>
          <button onClick={handlePrint} style={{ padding: '12px 8px', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 10, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
            <Printer size={14} />
            <span>Print</span>
          </button>
        </div>
        <div style={{ fontSize: 11, opacity: 0.75, textAlign: 'center', lineHeight: 1.5 }}>
          {shop?.email ? 'Email opens your mail app with everything filled in' : 'Copy then paste into WhatsApp, email, or Notes'}
        </div>
      </div>
    </div>
  );
}

// ============== INVOICE HTML BUILDER ==============
// Note: SVG logo embedded inline so it works offline and in any PDF renderer

function buildInvoiceHTML(consign, shop, m) {
  const items = consign.items || [];
  const itemRows = items.map(it => {
    const qty = parseInt(it.qty) || 0;
    const sold = parseInt(it.soldQty) || 0;
    const ret = parseInt(it.returnedQty) || 0;
    const price = parseFloat(it.price) || 0;
    const lineTotal = price * sold;
    return `<tr><td class="item-name">${escapeHtml(it.name || '')}</td><td class="num">${qty}</td><td class="num sold">${sold}</td><td class="num">${ret}</td><td class="num right">£${price.toFixed(2)}</td><td class="num right bold">£${lineTotal.toFixed(2)}</td></tr>`;
  }).join('');

  const invDate = consign.deliveryDate ? new Date(consign.deliveryDate) : new Date();
  const dueDate = new Date(invDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  const fmtDate = (d) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Invoice ${escapeHtml(consign.invoiceNumber)} - Misty Blooms Florist</title>
<style>
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif; color: #2C2A35; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; background: #F5EFE6; font-size: 12px; line-height: 1.5; }
  .page { max-width: 800px; margin: 0 auto; padding: 32px; background: #F5EFE6; min-height: calc(100vh - 28mm); position: relative; overflow: hidden; }
  .watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.05; pointer-events: none; z-index: 0; width: 70%; max-width: 500px; }
  .page > *:not(.watermark) { position: relative; z-index: 1; }
  .head { text-align: center; padding-bottom: 8px; margin-bottom: 28px; }
  .logo-wrap { display: inline-block; width: 200px; }
  .logo-wrap svg { width: 100%; height: auto; display: block; }
  .invoice-title { font-family: Georgia, "Playfair Display", serif; font-size: 28px; font-weight: 400; color: #2C2A35; letter-spacing: 6px; text-transform: uppercase; margin: 14px 0 4px; }
  .invoice-number { font-size: 12px; color: #5C5868; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; }
  .divider-fancy { display: flex; align-items: center; justify-content: center; gap: 14px; margin: 14px 0 6px; }
  .divider-fancy .line { flex: 1; max-width: 90px; height: 1px; background: #5C5868; }
  .divider-fancy .ornament { color: #5C5868; font-family: Georgia, serif; font-size: 16px; font-style: italic; }
  .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 32px 0 24px; padding: 18px 20px; background: #FFFFFF; border-radius: 8px; border: 1px solid #E5DDC8; }
  .meta-block .label { font-family: Georgia, serif; font-size: 10px; color: #8B8794; font-weight: 400; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 8px; font-style: italic; }
  .meta-block .name { font-family: Georgia, serif; font-size: 18px; font-weight: 400; color: #2C2A35; margin-bottom: 4px; letter-spacing: 0.5px; }
  .meta-block .small { font-size: 12px; color: #5C5868; line-height: 1.6; }
  .dates { display: flex; flex-direction: column; gap: 10px; }
  .dates .date-row { display: flex; justify-content: space-between; align-items: baseline; padding: 6px 0; }
  .dates .date-row.due { padding: 10px 12px; background: #F5E9D6; border-radius: 6px; border-left: 2px solid #B8956B; }
  .dates .date-row .v { font-size: 13px; font-weight: 600; color: #2C2A35; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 20px; background: #FFFFFF; border-radius: 8px; overflow: hidden; border: 1px solid #E5DDC8; }
  thead th { padding: 12px 10px; background: #3D3B4A; color: #F5EFE6; font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; text-align: left; font-family: Georgia, serif; }
  thead th.num { text-align: center; }
  thead th.right { text-align: right; }
  tbody td { padding: 11px 10px; border-bottom: 1px solid #F0E5D8; font-size: 12px; vertical-align: top; }
  tbody tr:last-child td { border-bottom: none; }
  td.item-name { color: #2C2A35; font-weight: 500; }
  td.num { text-align: center; color: #5C5868; }
  td.num.right { text-align: right; }
  td.num.bold { font-weight: 700; color: #2C2A35; }
  td.num.sold { color: #6B8559; font-weight: 600; }
  .totals-wrap { display: flex; justify-content: flex-end; margin-bottom: 24px; }
  .totals { width: 340px; background: #FFFFFF; padding: 16px 20px; border-radius: 8px; border: 1px solid #E5DDC8; }
  .totals .row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; }
  .totals .row span:first-child { color: #5C5868; }
  .totals .row.muted { color: #8B8794; font-size: 11px; }
  .totals .row.muted span { color: #8B8794; }
  .totals .divider { height: 1px; background: #E5DDC8; margin: 8px 0; }
  .totals .row.grand { background: #3D3B4A; color: #F5EFE6; padding: 14px 16px; border-radius: 6px; margin: 12px -4px 0; font-size: 15px; font-weight: 700; font-family: Georgia, serif; letter-spacing: 0.5px; }
  .totals .row.grand span { color: #F5EFE6 !important; }
  .bank { background: #FFFFFF; padding: 18px 22px; border-radius: 8px; margin-bottom: 18px; border: 1px solid #E5DDC8; border-left: 3px solid #B8956B; }
  .bank h3 { font-family: Georgia, serif; font-size: 13px; color: #2C2A35; font-weight: 400; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 10px; font-style: italic; }
  .bank-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
  .bank-label { color: #8B8794; font-size: 10px; letter-spacing: 0.8px; text-transform: uppercase; font-weight: 600; margin-bottom: 3px; font-family: Georgia, serif; font-style: italic; }
  .bank-value { color: #2C2A35; font-weight: 600; font-size: 14px; letter-spacing: 0.5px; }
  .terms { background: #FFFFFF; padding: 18px 22px; border-radius: 8px; margin-bottom: 18px; border: 1px solid #E5DDC8; border-left: 3px solid #3D3B4A; }
  .terms h3 { font-family: Georgia, serif; font-size: 13px; color: #2C2A35; font-weight: 400; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 10px; font-style: italic; }
  .terms ul { list-style: none; }
  .terms li { font-size: 11px; color: #5C5868; padding: 4px 0; padding-left: 16px; position: relative; line-height: 1.5; }
  .terms li:before { content: "❀"; position: absolute; left: 0; color: #B8956B; font-size: 10px; top: 5px; }
  .notes-block { padding: 14px 16px; background: #FFFFFF; border-radius: 6px; margin-bottom: 18px; font-size: 12px; color: #5C5868; line-height: 1.6; border: 1px solid #E5DDC8; }
  .notes-block strong { display: block; margin-bottom: 6px; color: #2C2A35; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; font-family: Georgia, serif; font-style: italic; font-weight: 400; }
  .footer { margin-top: 36px; padding-top: 20px; border-top: 1px solid #E5DDC8; text-align: center; }
  .footer .ornament-row { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 10px; }
  .footer .ornament-row .line { width: 50px; height: 1px; background: #B8956B; }
  .footer .ornament-row .flower { color: #B8956B; font-size: 14px; }
  .footer .thanks { font-family: Georgia, serif; font-size: 16px; color: #2C2A35; font-weight: 400; font-style: italic; margin-bottom: 6px; letter-spacing: 0.5px; }
  .footer .brand { font-family: Georgia, serif; font-size: 11px; color: #8B8794; letter-spacing: 3px; text-transform: uppercase; }
  @media print { body { padding: 0; background: #F5EFE6; } .page { padding: 20px; min-height: auto; } }
  @media (max-width: 600px) { .meta { grid-template-columns: 1fr; } .bank-grid { grid-template-columns: 1fr; } table { font-size: 11px; } thead th, tbody td { padding: 8px 6px; } }
</style></head>
<body>
  <div class="page">
    <div class="watermark">${LOGO_SVG_STRING}</div>
    <div class="head">
      <div class="logo-wrap">${LOGO_SVG_STRING}</div>
      <div class="divider-fancy"><div class="line"></div><div class="ornament">∽</div><div class="line"></div></div>
      <div class="invoice-title">Invoice</div>
      <div class="invoice-number">№ ${escapeHtml(consign.invoiceNumber)}</div>
    </div>
    <div class="meta">
      <div class="meta-block">
        <div class="label">Billed to</div>
        <div class="name">${escapeHtml(shop?.name || 'Unknown')}</div>
        ${shop?.contactName ? `<div class="small">${escapeHtml(shop.contactName)}</div>` : ''}
        ${shop?.address ? `<div class="small">${escapeHtml(shop.address).replace(/\n/g, '<br>')}</div>` : ''}
        ${shop?.phone ? `<div class="small">${escapeHtml(shop.phone)}</div>` : ''}
        ${shop?.email ? `<div class="small">${escapeHtml(shop.email)}</div>` : ''}
      </div>
      <div class="dates">
        <div class="date-row"><span class="label">Invoice date</span><span class="v">${fmtDate(invDate)}</span></div>
        <div class="date-row due"><span class="label">Payment due</span><span class="v">${fmtDate(dueDate)}</span></div>
        <div class="date-row"><span class="label">Terms</span><span class="v">7 days</span></div>
      </div>
    </div>
    <table>
      <thead><tr><th>Description</th><th class="num">Delivered</th><th class="num">Sold</th><th class="num">Returned</th><th class="num right">Unit price</th><th class="num right">Amount</th></tr></thead>
      <tbody>${itemRows}</tbody>
    </table>
    <div class="totals-wrap"><div class="totals">
      <div class="row muted"><span>Total delivered value</span><span>£${m.subtotal.toFixed(2)}</span></div>
      <div class="row muted"><span>Returned (not charged)</span><span>-£${m.returnedValue.toFixed(2)}</span></div>
      <div class="divider"></div>
      <div class="row"><span>Sold value</span><span>£${m.sold.toFixed(2)}</span></div>
      <div class="row"><span>Less shop commission (${m.commissionRate}%)</span><span>-£${m.shopShare.toFixed(2)}</span></div>
      <div class="row grand"><span>Amount due</span><span>£${m.owedToYou.toFixed(2)}</span></div>
    </div></div>
    <div class="bank">
      <h3>Payment Details</h3>
      <div class="bank-grid">
        <div><div class="bank-label">Account name</div><div class="bank-value">Miriam Subtee</div></div>
        <div><div class="bank-label">Sort code</div><div class="bank-value">09-01-28</div></div>
        <div><div class="bank-label">Account number</div><div class="bank-value">49637279</div></div>
      </div>
      <div style="margin-top: 12px; font-size: 11px; color: #5C5868; font-style: italic;">Please reference <strong>${escapeHtml(consign.invoiceNumber)}</strong> when transferring.</div>
    </div>
    <div class="terms">
      <h3>Terms & Conditions</h3>
      <ul>
        <li>Payment is due within <strong>7 days</strong> of invoice date.</li>
        <li>Goods are supplied on a sale-or-return basis. Only sold items are charged; returned items incur no fee.</li>
        <li>Shop retains ${m.commissionRate}% commission on the sold value as agreed.</li>
        <li>Returns must be reported in good condition at the time of settlement.</li>
        <li>All prices in pounds sterling (£). Please reference invoice number ${escapeHtml(consign.invoiceNumber)} on payment.</li>
      </ul>
    </div>
    ${consign.notes ? `<div class="notes-block"><strong>Notes</strong>${escapeHtml(consign.notes).replace(/\n/g, '<br>')}</div>` : ''}
    <div class="footer">
      <div class="ornament-row"><div class="line"></div><div class="flower">❀</div><div class="line"></div></div>
      <div class="thanks">Thank you for your business</div>
      <div class="brand">Misty Blooms · Florist</div>
    </div>
  </div>
</body></html>`;
}

// ============== REMINDER MODAL ==============

function ReminderModal({ invoice, shop, calc, onClose }) {
  const m = calc(invoice);
  const dueAmount = m.owedToYou.toFixed(2);
  const invDate = invoice.deliveryDate ? new Date(invoice.deliveryDate) : new Date(invoice.createdAt);
  const daysOld = Math.floor((Date.now() - invDate.getTime()) / (1000 * 60 * 60 * 24));

  const friendlyMessage = `Hi ${shop?.contactName || shop?.name || 'there'},\n\nJust a friendly reminder about invoice ${invoice.invoiceNumber} from Misty Blooms. The amount due is £${dueAmount}.\n\nWhenever you have a moment to settle, that would be lovely. Let me know if you need me to send the invoice again.\n\nThank you so much!\nMisty Blooms 🌷`;

  const firmMessage = `Hi ${shop?.contactName || shop?.name || 'there'},\n\nThis is a follow-up about invoice ${invoice.invoiceNumber} (£${dueAmount}), now ${daysOld} days old.\n\nOur terms are 7 days from invoice date. Could you please confirm when payment will be made? I'd appreciate getting this settled this week.\n\nThanks,\nMisty Blooms`;

  const [tone, setTone] = useState('friendly');
  const message = tone === 'friendly' ? friendlyMessage : firmMessage;

  const copyMessage = () => {
    navigator.clipboard?.writeText(message).then(
      () => alert('Message copied. Now paste it into WhatsApp, Messages, or email.'),
      () => alert('Could not copy automatically — please select and copy the text.')
    );
  };

  const smsLink = shop?.phone ? `sms:${shop.phone.replace(/\s/g, '')}?body=${encodeURIComponent(message)}` : null;
  const emailLink = shop?.email ? `mailto:${shop.email}?subject=${encodeURIComponent(`Reminder: Invoice ${invoice.invoiceNumber}`)}&body=${encodeURIComponent(message)}` : null;
  const whatsappLink = shop?.phone ? `https://wa.me/${shop.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}` : null;

  return (
    <Modal title="Send reminder" onClose={onClose}>
      <div>
        <div style={{ background: T.bgGrouped, padding: 14, borderRadius: 12, marginBottom: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Reminder for</div>
          <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 400, margin: '4px 0 2px', color: T.text }}>{shop?.name}</div>
          <div style={{ fontSize: 13, color: T.textSecondary }}>
            {invoice.invoiceNumber} · £{dueAmount} · {daysOld} days old
          </div>
        </div>

        <div style={{ display: 'flex', background: 'rgba(60,55,75,0.08)', borderRadius: 9, padding: 2, marginBottom: 14 }}>
          {[
            { id: 'friendly', label: '🌷 Friendly', desc: 'Polite nudge' },
            { id: 'firm', label: '📝 Firm', desc: 'Clear & direct' },
          ].map(t => {
            const active = tone === t.id;
            return (
              <button key={t.id} onClick={() => setTone(t.id)} style={{
                flex: 1, padding: '10px 8px', borderRadius: 7, border: 'none',
                background: active ? T.card : 'transparent',
                color: active ? T.text : T.textSecondary,
                fontSize: 13, fontWeight: 600,
                boxShadow: active ? '0 2px 6px rgba(0,0,0,0.05)' : 'none',
              }}>
                <div>{t.label}</div>
                <div style={{ fontSize: 10, color: T.textTertiary, marginTop: 2, fontWeight: 500 }}>{t.desc}</div>
              </button>
            );
          })}
        </div>

        <div style={{ background: T.card, border: `1px solid ${T.separator}`, padding: 14, borderRadius: 10, marginBottom: 14, fontSize: 13, color: T.text, lineHeight: 1.6, whiteSpace: 'pre-line' }}>
          {message}
        </div>

        <div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>Send via</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
          {whatsappLink && (
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ padding: '14px', background: '#25D366', color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              💬 WhatsApp
            </a>
          )}
          {smsLink && (
            <a href={smsLink} style={{ padding: '14px', background: T.accent, color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              📱 Text message
            </a>
          )}
          {emailLink && (
            <a href={emailLink} style={{ padding: '14px', background: T.card, color: T.accent, border: `1px solid ${T.accent}`, borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              ✉️ Email
            </a>
          )}
          <button onClick={copyMessage} style={{ padding: '14px', background: T.card, color: T.textSecondary, border: `1px dashed ${T.separator}`, borderRadius: 12, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            📋 Copy message
          </button>
        </div>

        {!shop?.phone && !shop?.email && (
          <div style={{ background: T.amberBg, padding: 12, borderRadius: 8, fontSize: 12, color: T.textSecondary, textAlign: 'center', lineHeight: 1.5 }}>
            💡 Add a phone or email to this shop's profile to send directly from here.
          </div>
        )}
      </div>
    </Modal>
  );
}

// ============== PROFIT & LOSS MODAL ==============

function ProfitLossModal({ onClose, consignments, purchases, products, shops, suppliers, calc }) {
  const incomeRows = consignments
    .filter(c => c.status !== 'cancelled')
    .map(c => {
      const m = calc(c);
      const shop = shops.find(s => s.id === c.shopId);
      return {
        id: c.id,
        date: c.deliveryDate || c.createdAt?.slice(0, 10),
        label: shop?.name || 'Unknown shop',
        sub: c.invoiceNumber,
        gross: m.sold,
        commission: m.shopShare,
        net: m.owedToYou,
        status: c.status,
      };
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  const expenseRows = purchases.map(p => {
    const sup = suppliers.find(s => s.id === p.supplierId);
    return {
      id: p.id,
      date: p.purchaseDate || p.createdAt?.slice(0, 10),
      label: sup?.name || 'Unknown supplier',
      sub: p.invoiceRef ? `Ref: ${p.invoiceRef}` : (p.items?.length ? `${p.items.length} items` : ''),
      amount: parseFloat(p.total) || 0,
      paid: p.paid,
    };
  }).sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  const cogsRows = consignments
    .filter(c => c.status !== 'cancelled')
    .map(c => {
      const items = c.items || [];
      const cost = items.reduce((s, it) => {
        const product = products.find(p => p.id === it.productId);
        const costPrice = parseFloat(it.cost) || parseFloat(product?.cost) || 0;
        return s + costPrice * (parseInt(it.soldQty) || 0);
      }, 0);
      const shop = shops.find(s => s.id === c.shopId);
      return cost > 0 ? {
        id: c.id + '_cogs',
        date: c.deliveryDate || c.createdAt?.slice(0, 10),
        label: `Cost of goods · ${shop?.name || 'Unknown'}`,
        sub: c.invoiceNumber,
        amount: cost,
      } : null;
    }).filter(Boolean);

  const totalIncome = incomeRows.reduce((s, r) => s + r.net, 0);
  const totalExpenses = expenseRows.reduce((s, r) => s + r.amount, 0);
  const totalCogs = cogsRows.reduce((s, r) => s + r.amount, 0);
  const netProfit = totalIncome - totalCogs;
  const cashProfit = totalIncome - totalExpenses;

  const [view, setView] = useState('summary');

  return (
    <Modal title="📊 Profit & Loss" onClose={onClose} wide>
      <div>
        <div style={{ background: netProfit >= 0 ? T.sageBg : T.redBg, padding: 20, borderRadius: 14, marginBottom: 18, textAlign: 'center', border: `1.5px solid ${netProfit >= 0 ? T.sage : T.red}` }}>
          <div style={{ fontSize: 36, marginBottom: 4 }}>{netProfit >= 0 ? '🌿' : '🥀'}</div>
          <div style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 400, color: netProfit >= 0 ? T.sage : T.red, letterSpacing: '-0.5px' }}>
            {netProfit >= 0 ? '+' : ''}£{netProfit.toFixed(2)}
          </div>
          <div style={{ fontSize: 12, color: T.textSecondary, fontWeight: 600, marginTop: 4, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {netProfit >= 0 ? 'Net profit' : 'Net loss'}
          </div>
          <div style={{ fontSize: 11, color: T.textTertiary, marginTop: 6, fontStyle: 'italic' }}>
            (Income from sold flowers minus their cost)
          </div>
        </div>

        <div style={{ display: 'flex', background: 'rgba(60,55,75,0.08)', borderRadius: 9, padding: 2, marginBottom: 14 }}>
          {[
            { id: 'summary', label: '📊 Summary' },
            { id: 'income', label: '📥 Income' },
            { id: 'expenses', label: '📤 Expenses' },
          ].map(t => {
            const active = view === t.id;
            return (
              <button key={t.id} onClick={() => setView(t.id)} style={{
                flex: 1, padding: '9px 8px', borderRadius: 7, border: 'none',
                background: active ? T.card : 'transparent',
                color: active ? T.text : T.textSecondary,
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                boxShadow: active ? '0 2px 6px rgba(0,0,0,0.05)' : 'none',
              }}>
                {t.label}
              </button>
            );
          })}
        </div>

        {view === 'summary' && (
          <div>
            <div style={{ background: T.card, borderRadius: 12, padding: 14, marginBottom: 12, border: `1px solid ${T.separator}` }}>
              <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, color: T.textTertiary, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 10 }}>The maths</div>
              <PnLRow emoji="📥" label="Income (your share of sold)" value={totalIncome} positive />
              <PnLRow emoji="📤" label="Cost of flowers sold" value={-totalCogs} />
              <div style={{ height: 1, background: T.separator, margin: '8px 0' }} />
              <PnLRow emoji={netProfit >= 0 ? '🌿' : '🥀'} label="Net profit (allocated)" value={netProfit} bold positive={netProfit >= 0} />
            </div>

            <div style={{ background: T.card, borderRadius: 12, padding: 14, marginBottom: 12, border: `1px solid ${T.separator}` }}>
              <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, color: T.textTertiary, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 10 }}>Cash view</div>
              <PnLRow emoji="📥" label="Money owed/received" value={totalIncome} positive />
              <PnLRow emoji="🛒" label="Total spent on flowers" value={-totalExpenses} />
              <div style={{ height: 1, background: T.separator, margin: '8px 0' }} />
              <PnLRow emoji={cashProfit >= 0 ? '💰' : '⚠️'} label="Cash flow" value={cashProfit} bold positive={cashProfit >= 0} />
            </div>

            <div style={{ background: T.amberBg, padding: 14, borderRadius: 10, fontSize: 12, color: T.textSecondary, lineHeight: 1.6 }}>
              <strong>💡 What's the difference?</strong><br/>
              <strong>Net profit</strong> uses cost prices set per flower (most accurate when stock has costs).<br/>
              <strong>Cash flow</strong> shows actual money in vs out (simpler but messy with stock timing).
            </div>
          </div>
        )}

        {view === 'income' && (
          <div>
            <div style={{ background: T.sageBg, padding: 14, borderRadius: 10, marginBottom: 12, textAlign: 'center' }}>
              <div style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 400, color: T.sage }}>£{totalIncome.toFixed(2)}</div>
              <div style={{ fontSize: 11, color: T.textSecondary, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Total income (your share)</div>
            </div>
            {incomeRows.length === 0 ? (
              <div style={{ padding: 30, textAlign: 'center', color: T.textTertiary, fontSize: 14 }}>No income yet — create your first invoice!</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {incomeRows.map(r => (
                  <div key={r.id} className="ios-card" style={{ padding: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{r.label}</div>
                        <div style={{ fontSize: 11, color: T.textTertiary, marginTop: 2 }}>{r.date} · {r.sub}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: T.sage }}>+£{r.net.toFixed(2)}</div>
                        <StatusBadge status={r.status} />
                      </div>
                    </div>
                    <div style={{ fontSize: 11, color: T.textTertiary, marginTop: 6, paddingTop: 6, borderTop: `0.5px dashed ${T.separator}` }}>
                      Sold £{r.gross.toFixed(2)} − {((r.commission/r.gross)*100 || 0).toFixed(0)}% shop commission (£{r.commission.toFixed(2)})
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {view === 'expenses' && (
          <div>
            <div style={{ background: T.redBg, padding: 14, borderRadius: 10, marginBottom: 12, textAlign: 'center' }}>
              <div style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 400, color: T.red }}>£{totalExpenses.toFixed(2)}</div>
              <div style={{ fontSize: 11, color: T.textSecondary, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Total spent on flowers</div>
            </div>
            {expenseRows.length === 0 ? (
              <div style={{ padding: 30, textAlign: 'center', color: T.textTertiary, fontSize: 14 }}>No purchases yet — go to Purchases to record one.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {expenseRows.map(r => (
                  <div key={r.id} className="ios-card" style={{ padding: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{r.label}</div>
                        <div style={{ fontSize: 11, color: T.textTertiary, marginTop: 2 }}>{r.date}{r.sub ? ` · ${r.sub}` : ''}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: T.red }}>-£{r.amount.toFixed(2)}</div>
                        <PaidBadge paid={r.paid} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}

function PnLRow({ emoji, label, value, bold, positive }) {
  const color = positive ? T.sage : (value < 0 ? T.red : T.text);
  const sign = value > 0 ? '+' : '';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', fontSize: bold ? 16 : 14, fontWeight: bold ? 700 : 500 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.text }}>
        <span style={{ fontSize: 18 }}>{emoji}</span>
        {label}
      </span>
      <span style={{ color: bold ? color : (value < 0 ? T.red : T.text), fontWeight: bold ? 700 : 600 }}>
        {sign}£{Math.abs(value).toFixed(2)}
      </span>
    </div>
  );
}

// ============== SETTINGS / BACKUP MODAL ==============

function SettingsModal({ onClose, data, snapshots, onSnapshotTaken, onRestore }) {
  const fileInputRef = useRef(null);
  const xlsxInputRef = useRef(null);
  const [showBackupText, setShowBackupText] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [importedSnapshots, setImportedSnapshots] = useState(null);
  const [importedFromFile, setImportedFromFile] = useState(null);

  // SAFE backup: builds a CSV text + JSON dump and shows it to the user to copy/email.
  // No Blob, no File, no new constructors - just text. Works in ANY environment.
  const exportExcel = async () => {
    setExporting(true);
    try {
      // Record a snapshot of current state
      const newSnap = await onSnapshotTaken();

      // Build human-readable + machine-readable backup text
      const lines = [];
      lines.push('============================================');
      lines.push('     MISTY BLOOMS - BACKUP');
      lines.push('     ' + new Date().toLocaleString('en-GB'));
      lines.push('============================================');
      lines.push('');

      lines.push('--- SUMMARY ---');
      lines.push(`Shops:        ${data.shops?.length || 0}`);
      lines.push(`Stock items:  ${data.products?.length || 0}`);
      lines.push(`Invoices:     ${data.consignments?.length || 0}`);
      lines.push(`Suppliers:    ${data.suppliers?.length || 0}`);
      lines.push(`Purchases:    ${data.purchases?.length || 0}`);
      lines.push(`Total sold:   GBP ${(newSnap.totalSold || 0).toFixed(2)}`);
      lines.push(`Owed to you:  GBP ${(newSnap.totalOwed || 0).toFixed(2)}`);
      lines.push(`Net profit:   GBP ${(newSnap.totalProfit || 0).toFixed(2)}`);
      lines.push(`Total spent:  GBP ${(newSnap.totalSpent || 0).toFixed(2)}`);
      lines.push('');

      lines.push('--- SHOPS (CSV) ---');
      lines.push('Name,Contact,Phone,Email,Address,Commission%,Notes');
      (data.shops || []).forEach(s => {
        lines.push([s.name, s.contactName, s.phone, s.email, (s.address || '').replace(/\n/g, ' '), s.commissionRate, s.notes]
          .map(x => `"${(x || '').toString().replace(/"/g, '""')}"`).join(','));
      });
      lines.push('');

      lines.push('--- STOCK (CSV) ---');
      lines.push('Name,Stock,Cost,Price,Unit,Notes');
      (data.products || []).forEach(p => {
        lines.push([p.name, p.stock, p.cost, p.price, p.unit, p.notes]
          .map(x => `"${(x || '').toString().replace(/"/g, '""')}"`).join(','));
      });
      lines.push('');

      lines.push('--- INVOICES (CSV) ---');
      lines.push('Invoice#,Shop,Date,Status,Commission%,Notes,Items(name|delivered|sold|returned|price)');
      (data.consignments || []).forEach(c => {
        const shop = (data.shops || []).find(s => s.id === c.shopId);
        const itemsStr = (c.items || []).map(it => `${it.name}|${it.qty}|${it.soldQty}|${it.returnedQty}|${it.price}`).join(' ;; ');
        lines.push([c.invoiceNumber, shop?.name || '', c.deliveryDate, c.status, c.commissionRate, (c.notes || '').replace(/\n/g, ' '), itemsStr]
          .map(x => `"${(x || '').toString().replace(/"/g, '""')}"`).join(','));
      });
      lines.push('');

      lines.push('--- SUPPLIERS (CSV) ---');
      lines.push('Name,Contact,Phone,Email,Address,Notes');
      (data.suppliers || []).forEach(s => {
        lines.push([s.name, s.contactName, s.phone, s.email, (s.address || '').replace(/\n/g, ' '), s.notes]
          .map(x => `"${(x || '').toString().replace(/"/g, '""')}"`).join(','));
      });
      lines.push('');

      lines.push('--- PURCHASES (CSV) ---');
      lines.push('Date,Supplier,Ref,Total,Paid,PaidDate,Method,Notes,Items(name|qty|price)');
      (data.purchases || []).forEach(p => {
        const sup = (data.suppliers || []).find(s => s.id === p.supplierId);
        const itemsStr = (p.items || []).map(it => `${it.name}|${it.qty}|${it.price}`).join(' ;; ');
        lines.push([p.purchaseDate, sup?.name || '', p.invoiceRef, p.total, p.paid ? 'YES' : 'NO', p.paidDate, p.paidMethod, (p.notes || '').replace(/\n/g, ' '), itemsStr]
          .map(x => `"${(x || '').toString().replace(/"/g, '""')}"`).join(','));
      });
      lines.push('');

      // Raw JSON at the bottom for full restore
      lines.push('--- RAW JSON (for restore) ---');
      lines.push(JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), ...data }));

      const backupText = lines.join('\n');
      setShowBackupText(backupText);
    } catch (e) {
      console.error('Backup error:', e);
      alert('Backup failed: ' + (e.message || 'unknown error'));
    } finally {
      setExporting(false);
    }
  };


  const handleXlsxUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target.result;
        // Look for our raw JSON marker in the backup text file
        const marker = '--- RAW JSON (for restore) ---';
        const idx = text.indexOf(marker);
        if (idx === -1) {
          alert("Couldn't find restore data in this file. Make sure it's a Misty Blooms backup text file.");
          return;
        }
        const jsonStr = text.slice(idx + marker.length).trim();
        const parsed = JSON.parse(jsonStr);
        if (!confirm('This will REPLACE all your current data with the backup. Continue?')) return;
        onRestore(parsed);
        alert('Backup restored successfully.');
        onClose();
      } catch (err) {
        console.error(err);
        alert('Could not read this file. Make sure it is a Misty Blooms backup.');
      }
    };
    reader.readAsText(file);
  };

  const exportJson = () => {
    const backup = {
      exportedAt: new Date().toISOString(),
      version: 1,
      ...data,
    };
    const json = JSON.stringify(backup, null, 2);
    const date = new Date().toISOString().slice(0, 10);
    const fileName = `misty-blooms-backup-${date}.json`;

    try {
      const dataUrl = 'data:application/json;charset=utf-8,' + encodeURIComponent(json);
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = fileName;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => {
        if (confirm('If the download didn\'t start, tap OK to see the backup as text you can copy and save manually.')) {
          setShowBackupText(json);
        }
      }, 500);
    } catch (e) {
      setShowBackupText(json);
    }
  };

  const importJson = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (!confirm('This will REPLACE all your current data with the backup. Continue?')) return;
        onRestore(parsed);
        alert('Backup restored successfully.');
        onClose();
      } catch (err) {
        alert('Could not read this file. Make sure it is a Misty Blooms backup.');
      }
    };
    reader.readAsText(file);
  };

  const stats = {
    shops: data.shops?.length || 0,
    products: data.products?.length || 0,
    invoices: data.consignments?.length || 0,
    suppliers: data.suppliers?.length || 0,
    purchases: data.purchases?.length || 0,
  };

  const lastSnap = snapshots[0];
  const daysSinceBackup = lastSnap ? Math.floor((Date.now() - new Date(lastSnap.takenAt).getTime()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <Modal title="Settings & Backup" onClose={onClose}>
      <div>
        <div style={{ textAlign: 'center', padding: '8px 0 18px', borderBottom: `1px solid ${T.separator}`, marginBottom: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MistyBloomsLogo size={140} variant="full" />
          </div>
        </div>

        <div style={{ background: T.bgGrouped, padding: 16, borderRadius: 12, marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 12, color: T.textTertiary, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center' }}>Your data right now</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, fontSize: 14 }}>
            <DataStatRow emoji="🛍️" label="Shops" value={stats.shops} />
            <DataStatRow emoji="🌷" label="Stock items" value={stats.products} />
            <DataStatRow emoji="📋" label="Invoices" value={stats.invoices} />
            <DataStatRow emoji="🚚" label="Suppliers" value={stats.suppliers} />
            <DataStatRow emoji="🛒" label="Purchases" value={stats.purchases} />
            <DataStatRow emoji="💾" label="Backups" value={snapshots.length} />
          </div>
        </div>

        {/* EXCEL EXPORT - the main feature */}
        <div style={{ marginBottom: 18, padding: 16, background: T.sageBg, borderRadius: 12, border: `2px solid ${T.sage}` }}>
          <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 400, margin: '0 0 6px', color: T.text }}>📗 Backup to Excel</h3>
          <p style={{ fontSize: 13, color: T.textSecondary, margin: '0 0 12px', lineHeight: 1.5 }}>
            Downloads everything as an Excel file with a <strong>Backup History</strong> sheet that tracks how your business grows over time.
          </p>

          {/* Optional: merge previous file */}
          <div style={{ marginBottom: 12 }}>
            <input ref={xlsxInputRef} type="file" accept=".xlsx" onChange={handleXlsxUpload} style={{ display: 'none' }} />
            {importedFromFile ? (
              <div style={{ background: T.card, padding: '10px 12px', borderRadius: 8, fontSize: 12, color: T.textSecondary, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Check size={14} color={T.sage} />
                <span style={{ flex: 1 }}>Will merge history from <strong>{importedFromFile}</strong> ({importedSnapshots?.length || 0} previous backups)</span>
                <button onClick={() => { setImportedSnapshots(null); setImportedFromFile(null); }} style={{ background: 'transparent', border: 'none', color: T.red, fontSize: 16, padding: 0, cursor: 'pointer' }}>×</button>
              </div>
            ) : (
              <button onClick={() => xlsxInputRef.current?.click()} style={{ width: '100%', padding: '10px', background: 'transparent', color: T.textSecondary, border: `1px dashed ${T.separator}`, borderRadius: 10, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
                <Upload size={14} /> Merge with previous Excel file (optional)
              </button>
            )}
          </div>

          <button onClick={exportExcel} disabled={exporting} style={{ width: '100%', padding: '14px', background: T.sage, color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, letterSpacing: '0.3px', cursor: exporting ? 'wait' : 'pointer', opacity: exporting ? 0.7 : 1 }}>
            <FileSpreadsheet size={17} /> {exporting ? 'Exporting...' : 'Download Excel backup'}
          </button>
          <div style={{ fontSize: 11, color: T.textSecondary, marginTop: 10, textAlign: 'center', lineHeight: 1.5 }}>
            💡 Tip: every backup is a new file with date+time in the name.<br/>
            Save them all in a folder (Drive / iCloud) — and your history accumulates.
          </div>
        </div>

        {/* Backup history list */}
        {snapshots.length > 0 && (
          <div style={{ marginBottom: 18, padding: 14, background: T.card, borderRadius: 12, border: `1px solid ${T.separator}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <History size={16} color={T.accent} />
              <h3 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 400, margin: 0, color: T.text, fontStyle: 'italic' }}>Backup history</h3>
              {daysSinceBackup !== null && (
                <span style={{ marginLeft: 'auto', fontSize: 11, color: daysSinceBackup > 3 ? T.red : T.sage, fontWeight: 600 }}>
                  {daysSinceBackup === 0 ? 'Today' : `${daysSinceBackup}d ago`}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 200, overflowY: 'auto' }}>
              {snapshots.slice(0, 10).map(s => {
                const d = new Date(s.takenAt);
                return (
                  <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: T.bg, borderRadius: 8, fontSize: 12 }}>
                    <div>
                      <div style={{ fontWeight: 600, color: T.text }}>{d.toLocaleDateString('en-GB')} · {d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
                      <div style={{ color: T.textTertiary, fontSize: 11, marginTop: 1 }}>{s.invoiceCount} invoices · £{(s.totalSold || 0).toFixed(0)} sold</div>
                    </div>
                    <div style={{ color: T.sage, fontSize: 11, fontWeight: 700 }}>+£{(s.totalProfit || 0).toFixed(0)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* JSON Backup - secondary */}
        <details style={{ marginBottom: 14 }}>
          <summary style={{ cursor: 'pointer', fontSize: 13, color: T.textSecondary, fontWeight: 600, padding: '8px 0' }}>
            🔧 Advanced: JSON backup (for restoring everything)
          </summary>
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 12, color: T.textSecondary, margin: '0 0 10px', lineHeight: 1.5 }}>
              Technical backup that can be re-imported to restore all data exactly as it was.
            </p>
            <button onClick={exportJson} style={{ width: '100%', padding: '12px', background: T.accent, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
              <Download size={14} /> Download JSON
            </button>
            <input ref={fileInputRef} type="file" accept=".json" onChange={importJson} style={{ display: 'none' }} />
            <button onClick={() => fileInputRef.current?.click()} style={{ width: '100%', padding: '12px', background: T.card, color: T.accent, border: `1px dashed ${T.accent}`, borderRadius: 10, fontSize: 14, fontWeight: 600 }}>
              Restore from JSON
            </button>
          </div>
        </details>

        <div style={{ marginTop: 20, padding: 14, background: T.amberBg, borderRadius: 10, fontSize: 12, color: T.textSecondary, lineHeight: 1.6, textAlign: 'center' }}>
          💡 <strong>Best practice:</strong> Back up every Sunday. Keep all Excel files in one Drive folder. They build up into a complete business diary.
        </div>

        <div style={{ marginTop: 20, textAlign: 'center', fontSize: 11, color: T.textTertiary, letterSpacing: '1.5px', fontFamily: SERIF }}>
          MISTY BLOOMS · FLORIST
        </div>

        {showBackupText && (
          <div onClick={() => setShowBackupText(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <div onClick={(e) => e.stopPropagation()} style={{ background: T.bg, borderRadius: 16, padding: 20, maxWidth: 600, maxHeight: '92vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <h3 style={{ fontFamily: SERIF, margin: 0, fontSize: 20, fontWeight: 400 }}>✅ Backup ready</h3>
                <button onClick={() => setShowBackupText(null)} style={{ background: 'transparent', border: 'none', color: T.textSecondary, fontSize: 16, cursor: 'pointer' }}><X size={20} /></button>
              </div>
              <div style={{ background: T.sageBg, padding: 12, borderRadius: 10, marginBottom: 12, fontSize: 13, color: T.text, lineHeight: 1.6 }}>
                Your data is safe below. <strong>Tap "Email to myself"</strong> or <strong>"Copy"</strong> then paste into Notes/Drive. Keep this somewhere safe!
              </div>
              <textarea readOnly value={showBackupText} style={{ flex: 1, width: '100%', minHeight: 160, padding: 12, fontSize: 10, fontFamily: 'monospace', background: T.card, border: `1px solid ${T.separator}`, borderRadius: 8, resize: 'none', boxSizing: 'border-box' }} onFocus={(e) => e.target.select()} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
                <button onClick={() => {
                  const subject = `Misty Blooms backup ${new Date().toLocaleDateString('en-GB')}`;
                  const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(showBackupText.slice(0, 1800) + '\n\n[Full backup continues — use Copy for everything]')}`;
                  try { window.location.href = mailto; } catch (e) { alert('Could not open email app.'); }
                }} style={{ padding: 14, background: T.sage, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <Mail size={15} /> Email to myself
                </button>
                <button onClick={() => {
                  if (navigator.clipboard?.writeText) {
                    navigator.clipboard.writeText(showBackupText).then(
                      () => alert('✓ Copied! Now paste into Notes, email, or Drive and keep it safe.'),
                      () => alert('Tap the text box, select all, and copy manually.')
                    );
                  } else {
                    alert('Tap the text box, select all, and copy manually.');
                  }
                }} style={{ padding: 14, background: T.accent, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <Copy size={15} /> Copy all
                </button>
              </div>
              <div style={{ fontSize: 11, color: T.textTertiary, textAlign: 'center', marginTop: 10, lineHeight: 1.5 }}>
                💡 An .xlsx file may also have downloaded. This text is your guaranteed safety net.
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

function DataStatRow({ emoji, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: 18 }}>{emoji}</span>
      <div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>{value}</div>
        <div style={{ fontSize: 11, color: T.textTertiary, fontWeight: 600, letterSpacing: '0.3px', textTransform: 'uppercase' }}>{label}</div>
      </div>
    </div>
  );
}
