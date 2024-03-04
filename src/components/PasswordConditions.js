import { Check, X } from "lucide-react";
import React, { memo } from "react";

const PasswordConditions = ({ valid }) => {
  return (
    <>
      <div className="py-2">
        <span
          className={`flex items-center gap-1 ${
            valid.lengthreg && "text-green-500"
          }`}
        >
          {valid.lengthreg ? <Check className="w-3" /> : <X className="w-3" />}
          <p className="text-sm">Password must be 8 or more characters</p>
        </span>
        <span
          className={`flex items-center gap-1 ${
            valid.lowercase && "text-green-500"
          }`}
        >
          {valid.lowercase ? <Check className="w-3" /> : <X className="w-3" />}
          <p className="text-sm">Password must have one lowercase lettere</p>
        </span>
        <span
          className={`flex items-center gap-1 ${
            valid.uppercase && "text-green-500"
          }`}
        >
          {valid.uppercase ? <Check className="w-3" /> : <X className="w-3" />}
          <p className="text-sm">Password must have one uppercase letter</p>
        </span>
        <span
          className={`flex items-center gap-1 ${
            valid.special && "text-green-500"
          }`}
        >
          {valid.special ? <Check className="w-3" /> : <X className="w-3" />}
          <p className="text-sm">Password must have one special character</p>
        </span>
        <span
          className={`flex items-center gap-1 ${
            valid.number && "text-green-500"
          }`}
        >
          {valid.number ? <Check className="w-3" /> : <X className="w-3" />}
          <p className="text-sm">Password must have one number</p>
        </span>
      </div>
    </>
  );
};

export default memo(PasswordConditions);
