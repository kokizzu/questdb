package com.questdb.std.time;

import com.questdb.std.CharSequenceObjHashMap;

import java.time.ZoneId;

public class TimeZoneRuleFactory {

    public static final TimeZoneRuleFactory INSTANCE = new TimeZoneRuleFactory();

    private final CharSequenceObjHashMap<TimeZoneRules> ruleMap = new CharSequenceObjHashMap<>();

    public TimeZoneRuleFactory() {
        for (String z : ZoneId.getAvailableZoneIds()) {
            ruleMap.put(z, new TimeZoneRulesImpl(ZoneId.of(z).getRules()));
        }
    }

    public TimeZoneRules getTimeZoneRules(CharSequence id) {
        return ruleMap.get(id);
    }
}