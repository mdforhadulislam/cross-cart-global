"use client";

import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Check,
  ChevronDown,
  Clock,
  Diamond,
  Globe,
  Loader2,
  Package,
  Percent,
  Plane,
  RefreshCw,
  Rocket,
  Send,
  Shield,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";

interface QuoteFormData {
  origin: string;
  destination: string;
  weight: string;
  length: string;
  width: string;
  height: string;
  carrier: string;
  pickupRequired: boolean;
  fragile: boolean;
  insurance: boolean;
  cashOnDelivery: boolean;
  allInclusive: boolean;
}

interface QuoteResult {
  basePrice: number;
  weightCharge: number;
  volumetricCharge: number;
  carrierFee: number;
  additionalCharges: number;
  totalPrice: number;
  deliveryDays: string;
  currency: string;
  carrierName: string;
}

const ROUTES = [
  { id: "bd-to-in", name: "Bangladesh → India", icon: "🇧🇩→🇮🇳" },
  { id: "bd-to-cn", name: "Bangladesh → China", icon: "🇧🇩→🇨🇳" },
  { id: "bd-to-us", name: "Bangladesh → USA", icon: "🇧🇩→🇺🇸" },
  { id: "bd-to-uk", name: "Bangladesh → UK", icon: "🇧🇩→🇬🇧" },
  { id: "bd-to-eu", name: "Bangladesh → Europe", icon: "🇧🇩→🇪🇺" },
  { id: "bd-to-ae", name: "Bangladesh → UAE", icon: "🇧🇩→🇦🇪" },
  { id: "bd-to-my", name: "Bangladesh → Malaysia", icon: "🇧🇩→🇲🇾" },
  { id: "bd-to-au", name: "Bangladesh → Australia", icon: "🇧🇩→🇦🇺" },
  { id: "in-to-bd", name: "India → Bangladesh", icon: "🇮🇳→🇧🇩" },
  { id: "cn-to-bd", name: "China → Bangladesh", icon: "🇨🇳→🇧🇩" },
  { id: "us-to-bd", name: "USA → Bangladesh", icon: "🇺🇸→🇧🇩" },
  { id: "uk-to-bd", name: "UK → Bangladesh", icon: "🇬🇧→🇧🇩" },
];

const CARRIERS = [
  {
    id: "dhl",
    name: "DHL Express",
    logo: "DHL",
    tagline: "International Express",
    description: "3-5 Business Days",
    baseRate: 18,
    icon: Rocket,
    color: "#FFCC00",
    bgColor: "#FFCC00",
    features: [
      "Door to Door",
      "Customs Clearance",
      "Tracking",
      "Insurance Options",
      "Priority Handling",
    ],
    badge: "Premium",
    badgeColor: "#FFCC00",
  },
  {
    id: "fedex",
    name: "FedEx",
    logo: "FedEx",
    tagline: "Global Delivery",
    description: "4-7 Business Days",
    baseRate: 16,
    icon: Plane,
    color: "#4D148C",
    bgColor: "#4D148C",
    features: [
      "Express Delivery",
      "Package Tracking",
      "Customs Support",
      "Flexible Delivery",
      "Time Definite",
    ],
    badge: "Popular",
    badgeColor: "#4D148C",
  },
  {
    id: "ups",
    name: "UPS",
    logo: "UPS",
    tagline: "Worldwide Shipping",
    description: "5-10 Business Days",
    baseRate: 14,
    icon: Globe,
    color: "#351C15",
    bgColor: "#351C15",
    features: [
      "Global Network",
      "Reliable Service",
      "Real-time Tracking",
      "Cost Effective",
      "Secure Handling",
    ],
    badge: "Reliable",
    badgeColor: "#351C15",
  },
  {
    id: "aramex",
    name: "Aramex",
    logo: "Aramex",
    tagline: "Regional Expert",
    description: "7-14 Business Days",
    baseRate: 10,
    icon: Truck,
    color: "#ED1C24",
    bgColor: "#ED1C24",
    features: [
      "Middle East Focus",
      "Competitive Rates",
      "Door Pickup",
      "Cargo Services",
      "Express Parcels",
    ],
    badge: "Best Value",
    badgeColor: "#ED1C24",
  },
];

const WEIGHT_RATES: Record<string, number> = {
  "0-1": 18,
  "1-5": 15,
  "5-10": 12,
  "10-30": 10,
  "30+": 8,
};

export default function GetQuotePage() {
  const [formData, setFormData] = useState<QuoteFormData>({
    origin: "",
    destination: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    carrier: "dhl",
    pickupRequired: false,
    fragile: false,
    insurance: false,
    cashOnDelivery: false,
    allInclusive: false,
  });

  const [result, setResult] = useState<QuoteResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const calculateVolumetricWeight = () => {
    const { length, width, height } = formData;
    if (length && width && height) {
      return (
        (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 5000
      );
    }
    return 0;
  };

  const getActualWeight = () => {
    return parseFloat(formData.weight) || 0;
  };

  const getChargeableWeight = () => {
    return Math.max(getActualWeight(), calculateVolumetricWeight());
  };

  const getWeightRate = (weight: number): number => {
    if (weight <= 1) return WEIGHT_RATES["0-1"];
    if (weight <= 5) return WEIGHT_RATES["1-5"];
    if (weight <= 10) return WEIGHT_RATES["5-10"];
    if (weight <= 30) return WEIGHT_RATES["10-30"];
    return WEIGHT_RATES["30+"];
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.origin) newErrors.origin = "Please select origin";
    if (!formData.destination)
      newErrors.destination = "Please select destination";
    if (formData.origin === formData.destination)
      newErrors.destination = "Origin and destination must be different";
    if (!formData.weight || parseFloat(formData.weight) <= 0)
      newErrors.weight = "Please enter valid weight";
    if (parseFloat(formData.weight) > 500)
      newErrors.weight = "Maximum weight is 500kg for online quotes";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateQuote = () => {
    if (!validateForm()) return;

    setLoading(true);

    const selectedCarrier = CARRIERS.find((c) => c.id === formData.carrier);
    const weight = getChargeableWeight();
    const weightRate = getWeightRate(weight);

    setTimeout(() => {
      const basePrice = 20;
      const carrierFee = selectedCarrier?.baseRate || 15;
      const weightCharge = weight * weightRate * (carrierFee / 10);
      const volumetricCharge =
        calculateVolumetricWeight() > getActualWeight()
          ? (calculateVolumetricWeight() - getActualWeight()) * weightRate * 0.5
          : 0;
      const additionalCharges =
        (formData.pickupRequired ? 15 : 0) +
        (formData.fragile ? 30 : 0) +
        (formData.insurance ? weight * 0.03 * (carrierFee / 10) : 0) +
        (formData.cashOnDelivery ? 10 : 0) +
        (formData.allInclusive ? weight * 2 : 0);

      const totalPrice =
        basePrice +
        weightCharge +
        volumetricCharge +
        carrierFee +
        additionalCharges;

      setResult({
        basePrice,
        weightCharge,
        volumetricCharge,
        carrierFee,
        additionalCharges,
        totalPrice: Math.round(totalPrice * 100) / 100,
        deliveryDays: selectedCarrier?.description || "7-10 Business Days",
        currency: "USD",
        carrierName: selectedCarrier?.name || "Standard",
      });

      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      origin: "",
      destination: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      carrier: "dhl",
      pickupRequired: false,
      fragile: false,
      insurance: false,
      cashOnDelivery: false,
      allInclusive: false,
    });
    setResult(null);
    setShowResults(false);
    setErrors({});
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const selectedCarrier = CARRIERS.find((c) => c.id === formData.carrier);

  return (
    <div className="min-h-screen bg-[#0a1a0f] pt-12 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5B400]/10 border border-[#F5B400]/20 rounded-full mb-4">
            <Rocket className="h-4 w-4 text-[#F5B400]" />
            <span className="text-[#F5B400] text-sm font-medium">
              Instant Quote Calculator
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your <span className="text-[#F5B400]">Shipping Quote</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Compare rates from top carriers like DHL, FedEx, UPS & Aramex. Get
            instant, transparent pricing for your international shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: FORM */}
          <div className="lg:col-span-2 space-y-6">
            {/* CARRIER SELECTION */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-[#F5B400]" />
                </div>
                Select Carrier
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Choose your preferred shipping carrier
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CARRIERS.map((carrier) => {
                  const Icon = carrier.icon;
                  const isSelected = formData.carrier === carrier.id;

                  return (
                    <button
                      key={carrier.id}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          carrier: carrier.id,
                        }));
                        setShowResults(false);
                        setResult(null);
                      }}
                      className={`relative p-5 rounded-xl border transition-all duration-300 ${
                        isSelected
                          ? "border-[#F5B400] bg-[#F5B400]/10 shadow-lg shadow-[#F5B400]/10 scale-[1.02]"
                          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {/* Badge */}
                      <div
                        className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                        style={{ backgroundColor: carrier.bgColor }}
                      >
                        {carrier.badge}
                      </div>

                      <div className="flex items-start gap-4">
                        <div
                          className="h-14 w-14 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${carrier.color}20` }}
                        >
                          <Icon
                            className="h-7 w-7"
                            style={{ color: carrier.color }}
                          />
                        </div>
                        <div className="text-left flex-1">
                          <h4 className="text-white font-bold text-lg">
                            {carrier.name}
                          </h4>
                          <p className="text-white/50 text-xs mb-2">
                            {carrier.tagline}
                          </p>
                          <div className="flex items-baseline gap-1">
                            <span
                              className="text-xl font-bold"
                              style={{ color: carrier.color }}
                            >
                              ${carrier.baseRate}
                            </span>
                            <span className="text-white/40 text-xs">
                              /kg base rate
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-1">
                        {carrier.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <Check
                              className="h-3 w-3"
                              style={{ color: carrier.color }}
                            />
                            <span className="text-white/50 text-[10px]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Time */}
                      <div className="mt-3 flex items-center gap-2">
                        <Clock className="h-3 w-3 text-white/40" />
                        <span className="text-white/60 text-xs">
                          {carrier.description}
                        </span>
                      </div>

                      {/* Selected Indicator */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[#F5B400] flex items-center justify-center shadow-lg">
                          <Check className="h-4 w-4 text-[#081f10]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ROUTE SELECTION */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-[#F5B400]" />
                </div>
                Shipping Route
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Origin */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">
                    Origin Country
                  </label>
                  <div className="relative">
                    <select
                      name="origin"
                      value={formData.origin}
                      onChange={handleInputChange}
                      className={`w-full bg-[#081f10] border ${
                        errors.origin ? "border-red-500" : "border-white/10"
                      } rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:border-[#F5B400]/50 transition-all`}
                    >
                      <option value="" className="bg-[#0a1a0f]">
                        Select Origin
                      </option>
                      <option value="Bangladesh" className="bg-[#0a1a0f]">
                        Bangladesh 🇧🇩
                      </option>
                      <option value="India" className="bg-[#0a1a0f]">
                        India 🇮🇳
                      </option>
                      <option value="China" className="bg-[#0a1a0f]">
                        China 🇨🇳
                      </option>
                      <option value="USA" className="bg-[#0a1a0f]">
                        USA 🇺🇸
                      </option>
                      <option value="UK" className="bg-[#0a1a0f]">
                        UK 🇬🇧
                      </option>
                      <option value="UAE" className="bg-[#0a1a0f]">
                        UAE 🇦🇪
                      </option>
                      <option value="Malaysia" className="bg-[#0a1a0f]">
                        Malaysia 🇲🇾
                      </option>
                      <option value="Australia" className="bg-[#0a1a0f]">
                        Australia 🇦🇺
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                  </div>
                  {errors.origin && (
                    <p className="text-red-400 text-xs">{errors.origin}</p>
                  )}
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">
                    Destination Country
                  </label>
                  <div className="relative">
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className={`w-full bg-[#081f10] border ${
                        errors.destination
                          ? "border-red-500"
                          : "border-white/10"
                      } rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:border-[#F5B400]/50 transition-all`}
                    >
                      <option value="" className="bg-[#0a1a0f]">
                        Select Destination
                      </option>
                      <option value="Bangladesh" className="bg-[#0a1a0f]">
                        Bangladesh 🇧🇩
                      </option>
                      <option value="India" className="bg-[#0a1a0f]">
                        India 🇮🇳
                      </option>
                      <option value="China" className="bg-[#0a1a0f]">
                        China 🇨🇳
                      </option>
                      <option value="USA" className="bg-[#0a1a0f]">
                        USA 🇺🇸
                      </option>
                      <option value="UK" className="bg-[#0a1a0f]">
                        UK 🇬🇧
                      </option>
                      <option value="UAE" className="bg-[#0a1a0f]">
                        UAE 🇦🇪
                      </option>
                      <option value="Malaysia" className="bg-[#0a1a0f]">
                        Malaysia 🇲🇾
                      </option>
                      <option value="Australia" className="bg-[#0a1a0f]">
                        Australia 🇦🇺
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                  </div>
                  {errors.destination && (
                    <p className="text-red-400 text-xs">{errors.destination}</p>
                  )}
                </div>
              </div>
            </div>

            {/* PACKAGE DETAILS */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-[#F5B400]" />
                </div>
                Package Details
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Weight */}
                <div className="col-span-2 md:col-span-1 space-y-2">
                  <label className="text-sm font-semibold text-white/80">
                    Weight (kg) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="0.0"
                      min="0"
                      max="500"
                      step="0.1"
                      className={`w-full bg-[#081f10] border ${
                        errors.weight ? "border-red-500" : "border-white/10"
                      } rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F5B400]/50 transition-all`}
                    />
                  </div>
                  {errors.weight && (
                    <p className="text-red-400 text-xs">{errors.weight}</p>
                  )}
                </div>

                {/* Length */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">
                    Length (cm)
                  </label>
                  <input
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="1"
                    className="w-full bg-[#081f10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F5B400]/50 transition-all"
                  />
                </div>

                {/* Width */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">
                    Width (cm)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="1"
                    className="w-full bg-[#081f10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F5B400]/50 transition-all"
                  />
                </div>

                {/* Height */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/80">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="1"
                    className="w-full bg-[#081f10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F5B400]/50 transition-all"
                  />
                </div>
              </div>

              {/* Volumetric Weight Info */}
              {calculateVolumetricWeight() > 0 && (
                <div className="bg-[#F5B400]/5 border border-[#F5B400]/20 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calculator className="h-5 w-5 text-[#F5B400]" />
                    <span className="text-white/80 text-sm">
                      Volumetric Weight:
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#F5B400] font-bold">
                      {calculateVolumetricWeight().toFixed(2)} kg
                    </span>
                    {calculateVolumetricWeight() > getActualWeight() && (
                      <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                        Chargeable
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ADDITIONAL SERVICES */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#F5B400]" />
                </div>
                Additional Services
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Customize your shipping experience
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pickup */}
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.pickupRequired
                      ? "border-[#F5B400]/50 bg-[#F5B400]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#F5B400]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Door Pickup
                      </h4>
                      <p className="text-white/50 text-xs">+$15</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="pickupRequired"
                    checked={formData.pickupRequired}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`h-6 w-12 rounded-full relative transition-colors ${
                      formData.pickupRequired ? "bg-[#F5B400]" : "bg-white/20"
                    }`}
                  >
                    <div
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                        formData.pickupRequired ? "left-7" : "left-1"
                      }`}
                    />
                  </div>
                </label>

                {/* Fragile */}
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.fragile
                      ? "border-[#F5B400]/50 bg-[#F5B400]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                      <Diamond className="h-5 w-5 text-[#F5B400]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Fragile Handling
                      </h4>
                      <p className="text-white/50 text-xs">+$30</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="fragile"
                    checked={formData.fragile}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`h-6 w-12 rounded-full relative transition-colors ${
                      formData.fragile ? "bg-[#F5B400]" : "bg-white/20"
                    }`}
                  >
                    <div
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                        formData.fragile ? "left-7" : "left-1"
                      }`}
                    />
                  </div>
                </label>

                {/* Insurance */}
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.insurance
                      ? "border-[#F5B400]/50 bg-[#F5B400]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#F5B400]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Transit Insurance
                      </h4>
                      <p className="text-white/50 text-xs">3% of value</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="insurance"
                    checked={formData.insurance}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`h-6 w-12 rounded-full relative transition-colors ${
                      formData.insurance ? "bg-[#F5B400]" : "bg-white/20"
                    }`}
                  >
                    <div
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                        formData.insurance ? "left-7" : "left-1"
                      }`}
                    />
                  </div>
                </label>

                {/* All Inclusive */}
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.allInclusive
                      ? "border-[#F5B400]/50 bg-[#F5B400]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#F5B400]/10 flex items-center justify-center">
                      <BadgeCheck className="h-5 w-5 text-[#F5B400]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        All Inclusive Service
                      </h4>
                      <p className="text-white/50 text-xs">
                        Tax/VAT + All Payments Done
                      </p>
                      <p className="text-[#F5B400] text-[10px] font-medium">
                        Complete peace of mind
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="allInclusive"
                    checked={formData.allInclusive}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`h-6 w-12 rounded-full relative transition-colors ${
                      formData.allInclusive ? "bg-[#F5B400]" : "bg-white/20"
                    }`}
                  >
                    <div
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                        formData.allInclusive ? "left-7" : "left-1"
                      }`}
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* CALCULATE BUTTON */}
            <button
              onClick={calculateQuote}
              disabled={loading}
              className="w-full h-16 bg-gradient-to-r from-[#F5B400] to-[#E5A500] hover:from-[#E5A500] hover:to-[#D49400] text-[#081f10] font-bold tracking-wide uppercase rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-[#F5B400]/20 text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  Calculating Best Rate...
                </>
              ) : (
                <>
                  <Calculator className="h-6 w-6" />
                  Calculate Quote
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>

          {/* RIGHT: RESULTS */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {showResults && result ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6 animate-fade-in">
                  {/* Carrier Badge */}
                  <div className="flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
                      <span className="text-white/70 text-sm font-medium">
                        {selectedCarrier?.name} Selected
                      </span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="text-center pb-4 border-b border-white/10">
                    <p className="text-white/50 text-sm mb-1">
                      Estimated Shipping Cost
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-[#F5B400]">
                        ${result.totalPrice}
                      </span>
                      <span className="text-white/50">{result.currency}</span>
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="flex items-center justify-center gap-3 text-center bg-white/5 rounded-xl p-4">
                    <span className="text-white font-medium">
                      {formData.origin || "Origin"}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#F5B400]" />
                    <span className="text-white font-medium">
                      {formData.destination || "Destination"}
                    </span>
                  </div>

                  {/* Delivery Time */}
                  <div className="bg-[#F5B400]/10 rounded-xl p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#F5B400]/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#F5B400]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">
                        Estimated Delivery
                      </p>
                      <p className="text-white font-semibold">
                        {result.deliveryDays}
                      </p>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <h4 className="text-white/80 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                      <Percent className="h-4 w-4" />
                      Price Breakdown
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Base Charge</span>
                        <span className="text-white">
                          ${result.basePrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Weight Charge</span>
                        <span className="text-white">
                          ${result.weightCharge.toFixed(2)}
                        </span>
                      </div>
                      {result.volumetricCharge > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-white/50">Volumetric Adj.</span>
                          <span className="text-white">
                            ${result.volumetricCharge.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">
                          {result.carrierName} Fee
                        </span>
                        <span className="text-white">
                          ${result.carrierFee.toFixed(2)}
                        </span>
                      </div>
                      {result.additionalCharges > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-white/50">Add-ons</span>
                          <span className="text-white">
                            ${result.additionalCharges.toFixed(2)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <button className="w-full h-12 bg-[#F5B400] hover:bg-[#F5B400]/90 text-[#081f10] font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F5B400]/20">
                      <Send className="h-4 w-4" />
                      Book Now
                    </button>
                    <button
                      onClick={resetForm}
                      className="w-full h-12 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      New Quote
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <Shield className="h-3 w-3" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <Check className="h-3 w-3" />
                      <span>Insured</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <Globe className="h-3 w-3" />
                      <span>Tracked</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex flex-col items-center text-center py-8">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#F5B400]/20 to-transparent flex items-center justify-center mb-4">
                      <Calculator className="h-10 w-10 text-[#F5B400]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Ready to Calculate
                    </h3>
                    <p className="text-white/50 text-sm">
                      Select a carrier, enter your details, and get an instant
                      quote
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-[#F5B400]" />
                      <span className="text-white/70">
                        Multiple carrier options
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-[#F5B400]" />
                      <span className="text-white/70">Transparent pricing</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-[#F5B400]" />
                      <span className="text-white/70">
                        Real-time calculation
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-[#F5B400]" />
                      <span className="text-white/70">No hidden fees</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* POPULAR ROUTES */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Popular <span className="text-[#F5B400]">Routes</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ROUTES.map((route) => (
              <button
                key={route.id}
                onClick={() => {
                  const [origin, destination] = route.name.split(" → ");
                  setFormData((prev) => ({
                    ...prev,
                    origin,
                    destination,
                  }));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#F5B400]/30 hover:bg-[#F5B400]/5 transition-all text-center group"
              >
                <span className="text-2xl mb-2 block">{route.icon}</span>
                <span className="text-white/70 text-xs group-hover:text-white transition-colors">
                  {route.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* TRUST SECTION */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Globe className="h-8 w-8 text-[#F5B400] mx-auto mb-3" />
            <h4 className="text-white font-bold">220+ Countries</h4>
            <p className="text-white/50 text-sm">Worldwide Coverage</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Shield className="h-8 w-8 text-[#F5B400] mx-auto mb-3" />
            <h4 className="text-white font-bold">100% Insured</h4>
            <p className="text-white/50 text-sm">Secure Shipments</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Clock className="h-8 w-8 text-[#F5B400] mx-auto mb-3" />
            <h4 className="text-white font-bold">24/7 Support</h4>
            <p className="text-white/50 text-sm">Always Available</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Star className="h-8 w-8 text-[#F5B400] mx-auto mb-3" />
            <h4 className="text-white font-bold">10K+ Reviews</h4>
            <p className="text-white/50 text-sm">Customer Trust</p>
          </div>
        </div>
      </div>
    </div>
  );
}
